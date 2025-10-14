from playwright.async_api import async_playwright
from fastapi import FastAPI, Response, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import asyncio
import os
from datetime import datetime
from typing import Optional

app = FastAPI(title="FSM PDF Generator", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "https://realavalanche.github.io",
        "http://localhost:3001"  # In case you're running dev server on different port
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PDFRequest(BaseModel):
    activeTab: Optional[str] = "overview"
    timestamp: Optional[str] = None

@app.get("/")
async def root():
    return {"message": "FSM PDF Generator Service", "status": "running"}

@app.post("/generate-pdf")
async def generate_pdf(request: PDFRequest):
    try:
        async with async_playwright() as p:
            # Launch browser
            browser = await p.chromium.launch(
                headless=True,
                args=[
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-gpu'
                ]
            )
            
            page = await browser.new_page()
            
            # Set viewport for consistent rendering
            await page.set_viewport_size({"width": 1400, "height": 900})
            
            # Navigate to your GitHub Pages site
            url = "https://realavalanche.github.io/fsm/"
            print(f"Navigating to: {url}")
            
            await page.goto(url, wait_until="networkidle", timeout=30000)
            
            # Wait for the main content to load
            await page.wait_for_selector('.bg-white.rounded-lg.shadow-lg', timeout=10000)
            
            # Add comprehensive CSS for PDF formatting
            await page.add_style_tag(content="""
                @media print {
                    body { 
                        -webkit-print-color-adjust: exact !important;
                        color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    
                    /* Hide UI elements for PDF */
                    .flex.border-b,
                    button,
                    .flex.gap-2 {
                        display: none !important;
                    }
                    
                    /* Style improvements */
                    .shadow-lg {
                        box-shadow: none !important;
                        border: 1px solid #e5e7eb !important;
                    }
                    .bg-gray-100 {
                        background-color: white !important;
                    }
                    .overflow-x-auto {
                        overflow: visible !important;
                    }
                    
                    /* Page break handling */
                    table {
                        page-break-inside: avoid;
                        break-inside: avoid;
                    }
                    .grid {
                        break-inside: avoid;
                        page-break-inside: avoid;
                    }
                    h1, h2, h3 {
                        page-break-after: avoid;
                        break-after: avoid;
                    }
                }
            """)
            
            # Collect content from all tabs
            all_content = []
            
            tabs = [
                {"name": "Feature Comparison", "selector": "Feature Comparison"},
                {"name": "Ventro Weighted Scorecard", "selector": "Ventro Weighted Scorecard"}, 
                {"name": "Recommendations", "selector": "Recommendations"}
            ]
            
            for i, tab in enumerate(tabs):
                print(f"Capturing content for: {tab['name']}")
                
                # Click on the tab
                try:
                    await page.click(f"button:has-text('{tab['selector']}')")
                    await page.wait_for_timeout(3000)  # Wait for content to load
                except Exception as e:
                    print(f"Could not click tab {tab['name']}: {e}")
                    continue
                
                # Get the content of the active tab - more specific selector
                tab_content = await page.evaluate("""
                    () => {
                        // Get the tab content area
                        const tabContentArea = document.querySelector('.bg-white.rounded-lg.shadow-lg .p-6');
                        if (tabContentArea) {
                            // Clone the content to avoid modifying the original
                            const clone = tabContentArea.cloneNode(true);
                            
                            // Remove any buttons or UI elements
                            const buttons = clone.querySelectorAll('button');
                            buttons.forEach(btn => btn.remove());
                            
                            const flexElements = clone.querySelectorAll('.flex.border-b, .flex.gap-2');
                            flexElements.forEach(el => el.remove());
                            
                            // Remove any empty divs or unnecessary wrappers
                            const emptyDivs = clone.querySelectorAll('div:empty');
                            emptyDivs.forEach(div => div.remove());
                            
                            // Get all meaningful content while preserving structure
                            let mainContent = '';
                            
                            // Remove only UI elements but keep all content
                            const contentArea = clone;
                            
                            // Get the main content area after removing UI elements
                            mainContent = contentArea.innerHTML;
                            
                            // Clean up empty elements but preserve structure
                            if (mainContent.trim().length < 50) {
                                // Fallback - get all content from the tab
                                const fallbackContent = clone.querySelector('.p-6, .bg-white, .rounded-lg');
                                if (fallbackContent) {
                                    mainContent = fallbackContent.innerHTML;
                                } else {
                                    mainContent = clone.innerHTML;
                                }
                            }
                            
                            return mainContent;
                        }
                        return '';
                    }
                """)
                
                if tab_content:
                    all_content.append({
                        'name': tab['name'],
                        'content': tab_content
                    })
            
            # Create a comprehensive HTML document with all sections
            sections_html = ""
            for section in all_content:
                sections_html += f"""
                <div class="pdf-section">
                    <h2 class="section-header">{section['name']}</h2>
                    <div class="section-content">{section['content']}</div>
                </div>
                """
            
            consolidated_html = f"""
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <title>FSM Platform Comparison - Complete Report</title>
                <style>
                    * {{
                        box-sizing: border-box;
                    }}
                    
                    body {{
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        line-height: 1.4;
                        margin: 0;
                        padding: 20px;
                        color: #1f2937;
                        font-size: 12px;
                    }}
                    
                    .header {{
                        text-align: center;
                        border-bottom: 3px solid #3b82f6;
                    }}
                    
                    .header h1 {{
                        color: #1f2937;
                        font-size: 24px;
                        margin-bottom: 8px;
                        font-weight: bold;
                    }}
                    
                    .header p {{
                        color: #6b7280;
                        margin: 4px 0;
                        font-size: 14px;
                    }}
                    
                    .pdf-section {{
                        margin-bottom: 30px;
                        page-break-inside: avoid;
                    }}
                    
                    .pdf-section:first-child {{
                        margin-top: 0;
                    }}
                    
                    .pdf-section .section-content {{
                        margin-top: 0;
                        padding-top: 0;
                    }}
                    
                    .pdf-section .section-content > *:first-child {{
                        margin-top: 0 !important;
                        padding-top: 0 !important;
                    }}
                    
                    .section-header {{
                        color: #1f2937;
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 15px;
                        padding-bottom: 8px;
                        border-bottom: 2px solid #3b82f6;
                        page-break-after: avoid;
                    }}
                    
                    .section-content {{
                        margin-left: 0;
                    }}
                    
                    /* Table Styles */
                    table {{
                        width: 100%;
                        border-collapse: collapse;
                        margin: 15px 0;
                        page-break-inside: avoid;
                        font-size: 10px;
                    }}
                    
                    th, td {{
                        border: 1px solid #d1d5db;
                        padding: 6px;
                        text-align: left;
                        vertical-align: top;
                    }}
                    
                    th {{
                        background-color: #f3f4f6;
                        font-weight: bold;
                        font-size: 9px;
                    }}
                    
                    /* Grid layout for comparison tables */
                    .grid {{
                        display: table;
                        width: 100%;
                        margin-bottom: 2px;
                        page-break-inside: avoid;
                    }}
                    
                    .grid.grid-cols-12 {{
                        border-collapse: collapse;
                    }}
                    
                    .grid > div {{
                        display: table-cell;
                        padding: 6px;
                        border: 1px solid #e5e7eb;
                        vertical-align: top;
                        font-size: 9px;
                        line-height: 1.3;
                    }}
                    
                    .col-span-3 {{ width: 25%; }}
                    .col-span-2 {{ width: 16.666%; }}
                    
                    /* Navy blue headers - only for specific header elements */
                    table th {{
                        background-color: #1e3a8a !important;
                        color: white !important;
                        font-weight: bold;
                        font-size: 10px;
                    }}
                    
                    /* Only apply navy to elements that explicitly have bg-blue-900 class AND are headers */
                    .grid > div.bg-blue-900:first-child,
                    th.bg-blue-900,
                    .bg-blue-900.font-bold {{
                        background-color: #1e3a8a !important;
                        color: white !important;
                        font-weight: bold;
                        font-size: 10px;
                    }}
                    
                    /* Color styling consistent with web page */
                    .bg-blue-900 {{
                        background-color: #1e3a8a !important;
                        color: white !important;
                        font-weight: bold;
                        font-size: 10px;
                    }}
                    
                    .bg-yellow-50 {{
                        background-color: #fefce8 !important;
                    }}
                    
                    .bg-gray-50 {{
                        background-color: #f9fafb !important;
                    }}
                    
                    .bg-red-50 {{
                        background-color: #fef2f2 !important;
                    }}
                    
                    .bg-green-50 {{
                        background-color: #f0fdf4 !important;
                    }}
                    
                    .bg-orange-50 {{
                        background-color: #fff7ed !important;
                    }}
                    
                    .text-blue-600 {{
                        color: #2563eb !important;
                        font-weight: bold;
                    }}
                    
                    .text-red-600 {{
                        color: #dc2626 !important;
                        font-weight: bold;
                    }}
                    
                    .text-green-600 {{
                        color: #059669 !important;
                        font-weight: bold;
                    }}
                    
                    .text-orange-600 {{
                        color: #ea580c !important;
                        font-weight: bold;
                    }}
                    
                    .text-gray-900 {{
                        color: #111827 !important;
                    }}
                    
                    .text-gray-700 {{
                        color: #374151 !important;
                    }}
                    
                    .text-gray-600 {{
                        color: #4b5563 !important;
                    }}
                    
                    /* Additional utility classes for better styling */
                    .border-red-200 {{
                        border-color: #fecaca !important;
                    }}
                    
                    .border-green-200 {{
                        border-color: #bbf7d0 !important;
                    }}
                    
                    .border-yellow-200 {{
                        border-color: #fde68a !important;
                    }}
                    
                    .border-blue-200 {{
                        border-color: #bfdbfe !important;
                    }}
                    
                    .font-bold {{
                        font-weight: bold;
                    }}
                    
                    .text-sm {{
                        font-size: 10px;
                    }}
                    
                    .text-xs {{
                        font-size: 9px;
                    }}
                    
                    .mb-6 {{
                        margin-bottom: 20px;
                    }}
                    
                    .mb-2 {{
                        margin-bottom: 8px;
                    }}
                    
                    .mt-1 {{
                        margin-top: 4px;
                    }}
                    
                    .p-3 {{
                        padding: 6px;
                    }}
                    
                    .px-4 {{
                        padding-left: 8px;
                        padding-right: 8px;
                    }}
                    
                    .py-2 {{
                        padding-top: 4px;
                        padding-bottom: 4px;
                    }}
                    
                    /* Remove any remaining buttons */
                    button {{
                        display: none !important;
                    }}
                    
                    /* Scorecard specific styles */
                    .scorecard-table {{
                        font-size: 9px;
                    }}
                    
                    .scorecard-table th {{
                        background-color: #1e3a8a;
                        color: white;
                        font-size: 8px;
                        padding: 4px;
                    }}
                    
                    .scorecard-table td {{
                        padding: 4px;
                        font-size: 8px;
                    }}
                    
                    /* Recommendations styles */
                    .recommendations ul {{
                        margin: 10px 0;
                        padding-left: 20px;
                    }}
                    
                    .recommendations li {{
                        margin-bottom: 8px;
                        line-height: 1.4;
                    }}
                    
                    /* Scenario sections */
                    .space-y-6 > div {{
                        margin-bottom: 15px;
                        padding: 10px;
                        border: 1px solid #e5e7eb;
                        border-radius: 4px;
                    }}
                    
                    .mb-6 {{
                        margin-bottom: 15px;
                    }}
                    
                    /* Headers for scenarios */
                    h3 {{
                        font-size: 14px;
                        font-weight: bold;
                        margin-bottom: 8px;
                        color: #1f2937;
                    }}
                    
                    h4 {{
                        font-size: 12px;
                        font-weight: 600;
                        margin-bottom: 6px;
                        color: #374151;
                    }}
                    
                    /* Lists in recommendations */
                    ul {{
                        margin: 8px 0;
                        padding-left: 16px;
                    }}
                    
                    li {{
                        margin-bottom: 4px;
                        line-height: 1.3;
                    }}
                    
                    /* Ensure proper page breaks */
                    @page {{
                        margin: 0.75in;
                        size: A4;
                    }}
                </style>
            </head>
            <body>
                {sections_html}
            </body>
            </html>
            """
            
            # Set the HTML content
            await page.set_content(consolidated_html, wait_until="networkidle")
            
            # Generate PDF with optimized settings
            pdf_bytes = await page.pdf(
                format="A4",
                margin={
                    "top": "0.75in", 
                    "bottom": "0.75in", 
                    "left": "0.5in", 
                    "right": "0.5in"
                },
                print_background=True,
                scale=0.8,
                prefer_css_page_size=False,
                landscape=False
            )
            
            await browser.close()
            
            # Generate filename with timestamp
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"FSM_Comparison_Complete_Report_{timestamp}.pdf"
            
            return Response(
                content=pdf_bytes,
                media_type="application/pdf",
                headers={
                    "Content-Disposition": f"attachment; filename={filename}",
                    "Content-Length": str(len(pdf_bytes))
                }
            )
            
    except Exception as e:
        print(f"Error generating PDF: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to generate PDF: {str(e)}")

@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

if __name__ == "__main__":
    import uvicorn
    print("Starting FSM PDF Generator Service...")
    print("Service will be available at: http://localhost:8000")
    print("API docs available at: http://localhost:8000/docs")
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=False)