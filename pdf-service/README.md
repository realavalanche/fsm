# FSM PDF Generator Service

A high-quality PDF generation service for the FSM Comparison tool using Playwright and FastAPI.

## Setup

1. **Run the setup script:**
   ```bash
   cd pdf-service
   ./setup.sh
   ```

2. **Activate the virtual environment:**
   ```bash
   source venv/bin/activate
   ```

3. **Start the service:**
   ```bash
   python main.py
   ```

The service will be available at `http://localhost:8000`

## API Endpoints

- `GET /` - Service status
- `POST /generate-pdf` - Generate PDF from the FSM comparison page
- `GET /health` - Health check
- `GET /docs` - Interactive API documentation

## Usage

The service will automatically:
- Navigate to your GitHub Pages site
- Wait for content to load
- Apply print-optimized CSS
- Generate a high-quality PDF
- Return the PDF file for download

## Features

- **High Quality**: Uses Chromium engine via Playwright
- **Print Optimization**: Custom CSS for better PDF rendering
- **Tab Support**: Can generate PDFs for specific tabs
- **Timestamped Files**: Automatic filename generation with timestamps
- **CORS Enabled**: Ready for frontend integration

## Docker Support (Optional)

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt
RUN playwright install chromium

COPY . .

EXPOSE 8000

CMD ["python", "main.py"]
```