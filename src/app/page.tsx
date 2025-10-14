/* eslint-disable */

"use client";

import React, { useState } from "react";
import { Download } from "lucide-react";

const FSMComparison = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Comprehensive comparison data
  const overviewData = [
    {
      category: "Platform Overview",
      feature: "Primary Focus",
      uptick: "Fire safety industry-specific FSM",
      totalMobile: "Generic field service management",
      d365: "Enterprise field service platform",
      uptickScore: "9/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Platform Overview",
      feature: "Target Market",
      uptick: "SMB fire protection companies",
      totalMobile: "Mid-market field service",
      d365: "Enterprise organizations",
      uptickScore: "8/10",
      tmScore: "7/10",
      d365Score: "10/10",
    },
    {
      category: "Platform Overview",
      feature: "Deployment Model",
      uptick: "Cloud SaaS only",
      totalMobile: "Cloud SaaS",
      d365: "Cloud (Azure)",
      uptickScore: "8/10",
      tmScore: "8/10",
      d365Score: "9/10",
    },
    {
      category: "Work Order Management",
      feature: "Multi-channel intake (phone/email/portal)",
      uptick: "✓ Good coverage",
      totalMobile: "✓ Good coverage",
      d365: "✓ Excellent - omnichannel",
      uptickScore: "8/10",
      tmScore: "8/10",
      d365Score: "9/10",
    },
    {
      category: "Work Order Management",
      feature: "Customer/asset linking",
      uptick: "✓ Excellent - purpose-built",
      totalMobile: "✓ Standard",
      d365: "✓ Excellent - Dataverse",
      uptickScore: "9/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Work Order Management",
      feature: "Service agreement automation",
      uptick: "✓ Excellent - contract billing",
      totalMobile: "✓ Good",
      d365: "✓ Excellent - recurring jobs",
      uptickScore: "9/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Work Order Management",
      feature: "IoT/sensor integration",
      uptick: "✗ Limited",
      totalMobile: "✗ Limited",
      d365: "✓ Connected Field Service",
      uptickScore: "3/10",
      tmScore: "3/10",
      d365Score: "9/10",
    },
    {
      category: "Scheduling & Dispatch",
      feature: "Visual schedule board",
      uptick: "✓ Good - calendar view",
      totalMobile: "✓ Excellent - map + calendar",
      d365: "✓ Excellent - Universal Resource Scheduling",
      uptickScore: "7/10",
      tmScore: "9/10",
      d365Score: "9/10",
    },
    {
      category: "Scheduling & Dispatch",
      feature: "Drag-and-drop dispatch",
      uptick: "✓ Yes",
      totalMobile: "✓ Yes - advanced",
      d365: "✓ Yes - intuitive",
      uptickScore: "7/10",
      tmScore: "9/10",
      d365Score: "9/10",
    },
    {
      category: "Scheduling & Dispatch",
      feature: "Skill-based resource matching",
      uptick: "✓ Basic - manual",
      totalMobile: "✓ Good",
      d365: "✓ Excellent - automated",
      uptickScore: "6/10",
      tmScore: "8/10",
      d365Score: "9/10",
    },
    {
      category: "Scheduling & Dispatch",
      feature: "AI-powered optimization",
      uptick: "✗ Not available",
      totalMobile: "~ Basic algorithms",
      d365: "✓ Resource Scheduling Optimization (RSO)",
      uptickScore: "2/10",
      tmScore: "5/10",
      d365Score: "10/10",
    },
    {
      category: "Scheduling & Dispatch",
      feature: "Route optimization",
      uptick: "~ Basic - manual",
      totalMobile: "✓ Good",
      d365: "✓ Excellent - real-time traffic",
      uptickScore: "5/10",
      tmScore: "8/10",
      d365Score: "9/10",
    },
    {
      category: "Scheduling & Dispatch",
      feature: "Customer self-scheduling portal",
      uptick: "~ Limited",
      totalMobile: "✓ Available",
      d365: "✓ Customer Portal (Power Pages)",
      uptickScore: "4/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Mobile App",
      feature: "iOS + Android support",
      uptick: "✓ Both platforms",
      totalMobile: "✓ Both platforms",
      d365: "✓ Both platforms",
      uptickScore: "9/10",
      tmScore: "9/10",
      d365Score: "9/10",
    },
    {
      category: "Mobile App",
      feature: "Digital forms/checklists",
      uptick: "✓ **Fire safety templates built-in**",
      totalMobile: "✓ Customizable",
      d365: "✓ Highly customizable",
      uptickScore: "10/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Mobile App",
      feature: "Photo/video capture & annotation",
      uptick: "✓ Good",
      totalMobile: "✓ Good",
      d365: "✓ Excellent",
      uptickScore: "8/10",
      tmScore: "8/10",
      d365Score: "9/10",
    },
    {
      category: "Mobile App",
      feature: "Barcode/QR code scanning",
      uptick: "✓ Asset scanning",
      totalMobile: "✓ Available",
      d365: "✓ Native support",
      uptickScore: "8/10",
      tmScore: "8/10",
      d365Score: "8/10",
    },
    {
      category: "Mobile App",
      feature: "E-signature capture",
      uptick: "✓ Digital sign-off",
      totalMobile: "✓ Available",
      d365: "✓ Native",
      uptickScore: "8/10",
      tmScore: "8/10",
      d365Score: "9/10",
    },
    {
      category: "Mobile App",
      feature: "GPS location tracking",
      uptick: "✓ Yes",
      totalMobile: "✓ Yes",
      d365: "✓ Yes - real-time",
      uptickScore: "8/10",
      tmScore: "8/10",
      d365Score: "9/10",
    },
    {
      category: "Asset Management",
      feature: "Asset hierarchy (building→equipment)",
      uptick: "✓ **Excellent** - fire safety focused",
      totalMobile: "✓ Standard",
      d365: "✓ Excellent - functional locations",
      uptickScore: "10/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Asset Management",
      feature: "Service history tracking",
      uptick: "✓ **Excellent** - compliance focused",
      totalMobile: "✓ Standard",
      d365: "✓ Excellent",
      uptickScore: "9/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Asset Management",
      feature: "**Fire safety compliance**",
      uptick: "✓ **BUILT-IN** (AS1851, BS5839, BS7273)",
      totalMobile: "✗ Not available",
      d365: "~ Requires customization",
      uptickScore: "10/10",
      tmScore: "1/10",
      d365Score: "4/10",
    },
    {
      category: "Asset Management",
      feature: "Preventive maintenance scheduling",
      uptick: "✓ Excellent - automated",
      totalMobile: "✓ Good",
      d365: "✓ Excellent - agreement-based",
      uptickScore: "9/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Asset Management",
      feature: "Warranty tracking",
      uptick: "✓ Basic",
      totalMobile: "✓ Available",
      d365: "✓ Comprehensive",
      uptickScore: "6/10",
      tmScore: "7/10",
      d365Score: "8/10",
    },
    {
      category: "Invoicing & ERP Integration",
      feature: "Work order → invoice automation",
      uptick: "~ Basic invoicing",
      totalMobile: "✓ Good",
      d365: "✓ **EXCELLENT** - native",
      uptickScore: "5/10",
      tmScore: "7/10",
      d365Score: "10/10",
    },
    {
      category: "Invoicing & ERP Integration",
      feature: "**NetSuite integration**",
      uptick: "~ Manual/CSV export",
      totalMobile: "~ Custom API work needed",
      d365: "✓ **Celigo iPaaS** (pre-built)",
      uptickScore: "3/10",
      tmScore: "5/10",
      d365Score: "10/10",
    },
    {
      category: "Invoicing & ERP Integration",
      feature: "Job costing (labor + materials)",
      uptick: "~ Basic",
      totalMobile: "✓ Good",
      d365: "✓ Excellent",
      uptickScore: "5/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Invoicing & ERP Integration",
      feature: "Real-time ERP sync",
      uptick: "✗ Batch/manual",
      totalMobile: "~ Requires custom",
      d365: "✓ Real-time via Celigo",
      uptickScore: "2/10",
      tmScore: "5/10",
      d365Score: "10/10",
    },
    {
      category: "Inventory Management",
      feature: "Warehouse stock management",
      uptick: "~ Basic",
      totalMobile: "✓ Good",
      d365: "✓ Excellent (can link to D365 SCM)",
      uptickScore: "5/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Inventory Management",
      feature: "Truck stock tracking",
      uptick: "✓ Good - per technician",
      totalMobile: "✓ Good",
      d365: "✓ Excellent - inventory adjustments",
      uptickScore: "8/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Inventory Management",
      feature: "Purchase order management",
      uptick: "~ Limited",
      totalMobile: "✓ Available",
      d365: "✓ Excellent",
      uptickScore: "4/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Inventory Management",
      feature: "Parts catalog with pricing",
      uptick: "✓ Basic",
      totalMobile: "✓ Good",
      d365: "✓ Excellent - product catalog",
      uptickScore: "6/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Reporting & Analytics",
      feature: "Standard reports",
      uptick: "✓ Fire safety focused",
      totalMobile: "✓ Standard FSM reports",
      d365: "✓ Comprehensive",
      uptickScore: "8/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Reporting & Analytics",
      feature: "Custom dashboards",
      uptick: "~ Limited customization",
      totalMobile: "✓ Available",
      d365: "✓ **Power BI integration**",
      uptickScore: "5/10",
      tmScore: "7/10",
      d365Score: "10/10",
    },
    {
      category: "Reporting & Analytics",
      feature: "KPI tracking",
      uptick: "✓ Basic metrics",
      totalMobile: "✓ Good",
      d365: "✓ Excellent - real-time",
      uptickScore: "7/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Reporting & Analytics",
      feature: "Executive dashboards",
      uptick: "~ Limited",
      totalMobile: "✓ Available",
      d365: "✓ Power BI embedded",
      uptickScore: "4/10",
      tmScore: "7/10",
      d365Score: "10/10",
    },
    {
      category: "Compliance & Regulatory",
      feature: "**Fire safety standards (UK)**",
      uptick: "✓ **BUILT-IN** (BS5839, BS7273)",
      totalMobile: "✗ Not available",
      d365: "~ Custom configuration needed",
      uptickScore: "10/10",
      tmScore: "1/10",
      d365Score: "4/10",
    },
    {
      category: "Compliance & Regulatory",
      feature: "Certificate generation",
      uptick: "✓ **Excellent** - automated",
      totalMobile: "~ Basic",
      d365: "✓ Good - Power Automate",
      uptickScore: "10/10",
      tmScore: "5/10",
      d365Score: "7/10",
    },
    {
      category: "Compliance & Regulatory",
      feature: "Regulatory submission (fire authority)",
      uptick: "✓ UK fire authority formats",
      totalMobile: "✗ Generic",
      d365: "~ Custom development",
      uptickScore: "9/10",
      tmScore: "2/10",
      d365Score: "5/10",
    },
    {
      category: "Compliance & Regulatory",
      feature: "Audit trail",
      uptick: "✓ Good",
      totalMobile: "✓ Good",
      d365: "✓ Excellent - comprehensive",
      uptickScore: "7/10",
      tmScore: "7/10",
      d365Score: "9/10",
    },
    {
      category: "Platform & Extensibility",
      feature: "API availability",
      uptick: "~ Limited REST APIs",
      totalMobile: "✓ Good API coverage",
      d365: "✓ **Extensive** REST APIs",
      uptickScore: "5/10",
      tmScore: "7/10",
      d365Score: "10/10",
    },
    {
      category: "Platform & Extensibility",
      feature: "Low-code customization",
      uptick: "✗ Limited - SaaS only",
      totalMobile: "~ Some configuration",
      d365: "✓ **Power Platform** (Power Apps, Power Automate)",
      uptickScore: "3/10",
      tmScore: "5/10",
      d365Score: "10/10",
    },
    {
      category: "Platform & Extensibility",
      feature: "Third-party integrations",
      uptick: "~ Limited marketplace",
      totalMobile: "✓ Good",
      d365: "✓ **Microsoft ecosystem** (365, Azure, Power Platform)",
      uptickScore: "4/10",
      tmScore: "7/10",
      d365Score: "10/10",
    },
    {
      category: "Platform & Extensibility",
      feature: "Scalability (users)",
      uptick: "✓ Good for SMB (up to 500 users)",
      totalMobile: "✓ Good",
      d365: "✓ **Enterprise-grade** (unlimited)",
      uptickScore: "7/10",
      tmScore: "7/10",
      d365Score: "10/10",
    },
    {
      category: "Platform & Extensibility",
      feature: "Multi-entity/subsidiary support",
      uptick: "~ Basic",
      totalMobile: "✓ Available",
      d365: "✓ **Excellent** - business units",
      uptickScore: "5/10",
      tmScore: "7/10",
      d365Score: "10/10",
    },
    {
      category: "Implementation",
      feature: "Typical implementation time",
      uptick: "**2 months** (fast)",
      totalMobile: "3-4 months",
      d365: "**3-6 months**",
      uptickScore: "10/10",
      tmScore: "7/10",
      d365Score: "6/10",
    },
    {
      category: "Implementation",
      feature: "Out-of-box functionality %",
      uptick: "**95%** (fire safety specific)",
      totalMobile: "80% (generic FSM)",
      d365: "**90%** (field service)",
      uptickScore: "10/10",
      tmScore: "8/10",
      d365Score: "9/10",
    },
    {
      category: "Implementation",
      feature: "Training complexity",
      uptick: "Low - intuitive for fire techs",
      totalMobile: "Medium",
      d365: "Medium-High",
      uptickScore: "9/10",
      tmScore: "6/10",
      d365Score: "6/10",
    },
    // {
    //   category: "Cost",
    //   feature: "Licensing model",
    //   uptick: "Per user/month (field + desk)",
    //   totalMobile: "Per user/month",
    //   d365: "Per user/month",
    //   uptickScore: "8/10",
    //   tmScore: "7/10",
    //   d365Score: "7/10",
    // },
    // {
    //   category: "Cost",
    //   feature: "Estimated cost per user/month",
    //   uptick: "~£45-65/user",
    //   totalMobile: "~£75-95/user",
    //   d365: "£105/user (D365 FSM) + £105 (Project Ops if needed)",
    //   uptickScore: "9/10",
    //   tmScore: "7/10",
    //   d365Score: "5/10",
    // },
    // {
    //   category: "Cost",
    //   feature: "Annual cost (130 users - FSM only)",
    //   uptick: "~£70k-101k/year",
    //   totalMobile: "~£117k-148k/year",
    //   d365: "~£164k/year (FSM only)",
    //   uptickScore: "9/10",
    //   tmScore: "7/10",
    //   d365Score: "5/10",
    // },
    // {
    //   category: "Cost",
    //   feature: "Annual cost (130 users - FSM + Project Ops)",
    //   uptick: "Not applicable (no project module)",
    //   totalMobile: "~£140k-170k/year (estimated)",
    //   d365: "~£327k/year (FSM + Project Ops)",
    //   uptickScore: "N/A",
    //   tmScore: "6/10",
    //   d365Score: "4/10",
    // },
    // {
    //   category: "Cost",
    //   feature: "Implementation cost (one-time)",
    //   uptick: "~£30-50k",
    //   totalMobile: "~£60-100k",
    //   d365: "~£100-180k",
    //   uptickScore: "9/10",
    //   tmScore: "7/10",
    //   d365Score: "5/10",
    // },
    // {
    //   category: "Cost",
    //   feature: "5-Year Total Cost of Ownership (FSM only)",
    //   uptick: "~£380-555k",
    //   totalMobile: "~£645-840k",
    //   d365: "~£920k-1.0M",
    //   uptickScore: "9/10",
    //   tmScore: "7/10",
    //   d365Score: "5/10",
    // },
    // {
    //   category: "Cost",
    //   feature: "5-Year TCO (FSM + Project Ops)",
    //   uptick: "N/A",
    //   totalMobile: "~£760k-950k",
    //   d365: "~£1.73M (FSM + Project Ops)",
    //   uptickScore: "N/A",
    //   tmScore: "6/10",
    //   d365Score: "3/10",
    // },
  ];

  const ventroScorecard = [
    {
      criteria: "Fire Safety Compliance (UK Standards)",
      weight: "20%",
      uptick: "10/10",
      totalMobile: "1/10",
      d365: "4/10",
      uptickWeighted: "2.0",
      tmWeighted: "0.2",
      d365Weighted: "0.8",
    },
    {
      criteria: "NetSuite ERP Integration",
      weight: "20%",
      uptick: "3/10",
      totalMobile: "5/10",
      d365: "10/10",
      uptickWeighted: "0.6",
      tmWeighted: "1.0",
      d365Weighted: "2.0",
    },
    {
      criteria: "Offline Mobile Capability",
      weight: "15%",
      uptick: "10/10",
      totalMobile: "7/10",
      d365: "5/10",
      uptickWeighted: "1.5",
      tmWeighted: "1.05",
      d365Weighted: "0.75",
    },
    {
      criteria: "AI-Powered Scheduling & Optimization",
      weight: "10%",
      uptick: "2/10",
      totalMobile: "5/10",
      d365: "10/10",
      uptickWeighted: "0.2",
      tmWeighted: "0.5",
      d365Weighted: "1.0",
    },
    {
      criteria: "Scalability (50+ Acquisitions)",
      weight: "10%",
      uptick: "5/10",
      totalMobile: "7/10",
      d365: "10/10",
      uptickWeighted: "0.5",
      tmWeighted: "0.7",
      d365Weighted: "1.0",
    },
    {
      criteria: "Implementation Speed",
      weight: "10%",
      uptick: "10/10",
      totalMobile: "7/10",
      d365: "6/10",
      uptickWeighted: "1.0",
      tmWeighted: "0.7",
      d365Weighted: "0.6",
    },
    {
      criteria: "Total Cost of Ownership (5 years)",
      weight: "5%",
      uptick: "9/10",
      totalMobile: "7/10",
      d365: "5/10",
      uptickWeighted: "0.45",
      tmWeighted: "0.35",
      d365Weighted: "0.25",
    },
    {
      criteria: "Platform Extensibility & Customization",
      weight: "5%",
      uptick: "3/10",
      totalMobile: "5/10",
      d365: "10/10",
      uptickWeighted: "0.15",
      tmWeighted: "0.25",
      d365Weighted: "0.5",
    },
    {
      criteria: "Advanced Analytics & Reporting",
      weight: "5%",
      uptick: "4/10",
      totalMobile: "7/10",
      d365: "10/10",
      uptickWeighted: "0.2",
      tmWeighted: "0.35",
      d365Weighted: "0.5",
    },
    {
      criteria: "TOTAL WEIGHTED SCORE",
      weight: "100%",
      uptick: "",
      totalMobile: "",
      d365: "",
      uptickWeighted: "6.6",
      tmWeighted: "5.05",
      d365Weighted: "7.4",
    },
  ];

  const recommendations = {
    immediate: [
      {
        scenario: "Scenario 1: Direct to D365 (7-8 months)",
        recommendation: "Long Term Goal",
        reasoning:
          "Direct migration delivering D365 FSM in ~7 months. Requires configuration of fire safety specific workflows and compliance forms, leveraging D365's flexible platform capabilities.",
      },
      {
        scenario: "Scenario 2: Uptick Interim → D365 (10-11 months)",
        recommendation: "RECOMMENDED",
        reasoning:
          "Best of both worlds - immediate fire compliance + long-term enterprise platform. Uptick (Month 1-4) provides relief, D365 (Month 10-11) provides scale.",
      },
      {
        scenario: "Total Mobile Option",
        recommendation: "Not Competitive",
        reasoning:
          "Capable FSM platform with balanced features. However, for Ventro's specific needs - fire safety compliance and enterprise integration, Uptick and D365 offer more targeted strengths.",
      },
    ],
    keyInsights: [
      "Interim: Uptick excels at fire compliance (10/10) and speed (~3 months), making it ideal for interim relief",
      "D365 FSM scores highest overall (7.4/10) due to enterprise capabilities and NetSuite integration",
      "Total Mobile (5.05/10) doesn't differentiate enough to justify over specialized (Uptick) or enterprise (D365) options",
      "Phased approach leverages Uptick's speed + D365's power while mitigating both platforms' weaknesses",
    ],
  };

  const downloadCSV = () => {
    // Create CSV content with proper escaping
    const rows = [];

    // Feature Comparison Section
    rows.push(["FEATURE COMPARISON - UPTICK VS TOTAL MOBILE VS D365 FSM"]);
    rows.push([]);
    rows.push([
      "Category",
      "Feature",
      "Uptick",
      "Total Mobile",
      "D365 FSM",
      "Uptick Score",
      "TM Score",
      "D365 Score",
    ]);

    overviewData.forEach((row) => {
      rows.push([
        row.category,
        row.feature,
        row.uptick.replace(/"/g, '""'),
        row.totalMobile.replace(/"/g, '""'),
        row.d365.replace(/"/g, '""'),
        row.uptickScore,
        row.tmScore,
        row.d365Score,
      ]);
    });

    // Add spacing
    rows.push([]);
    rows.push([]);

    // Weighted Scorecard Section
    rows.push(["VENTRO WEIGHTED SCORECARD"]);
    rows.push([]);
    rows.push([
      "Criteria",
      "Weight",
      "Uptick Raw",
      "TM Raw",
      "D365 Raw",
      "Uptick Weighted",
      "TM Weighted",
      "D365 Weighted",
    ]);

    ventroScorecard.forEach((row) => {
      rows.push([
        row.criteria,
        row.weight,
        row.uptick,
        row.totalMobile,
        row.d365,
        row.uptickWeighted,
        row.tmWeighted,
        row.d365Weighted,
      ]);
    });

    // Convert to CSV string
    const csvContent = rows
      .map((row) =>
        row
          .map((cell) => {
            const cellStr = String(cell || "");
            // Escape quotes and wrap in quotes if contains comma, quote, or newline
            if (
              cellStr.includes(",") ||
              cellStr.includes('"') ||
              cellStr.includes("\n")
            ) {
              return `"${cellStr.replace(/"/g, '""')}"`;
            }
            return cellStr;
          })
          .join(",")
      )
      .join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      "FSM_Comparison_Ventro_" + new Date().toISOString().split("T")[0] + ".csv"
    );
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    URL.revokeObjectURL(url);
  };

  const CategorySection = ({ category, features }) => (
    <div className="mb-6">
      <div className="bg-blue-900 text-white px-4 py-2 font-bold text-sm">
        {category}
      </div>
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="grid grid-cols-12 border-b border-gray-200 hover:bg-gray-50"
        >
          <div className="col-span-3 p-3 text-sm font-medium border-r">
            {feature.feature}
          </div>
          <div className="col-span-2 p-3 text-xs border-r">
            <div>{feature.uptick}</div>
            <div className="text-blue-600 font-bold mt-1">
              {feature.uptickScore}
            </div>
          </div>
          <div className="col-span-2 p-3 text-xs border-r">
            <div>{feature.totalMobile}</div>
            <div className="text-blue-600 font-bold mt-1">
              {feature.tmScore}
            </div>
          </div>
          <div className="col-span-2 p-3 text-xs border-r">
            <div>{feature.d365}</div>
            <div className="text-blue-600 font-bold mt-1">
              {feature.d365Score}
            </div>
          </div>
          <div className="col-span-3 p-3 text-xs bg-yellow-50">
            {getWinner(feature.uptickScore, feature.tmScore, feature.d365Score)}
          </div>
        </div>
      ))}
    </div>
  );

  const getWinner = (uptick, tm, d365) => {
    const scores = {
      Uptick: parseFloat(uptick),
      "Total Mobile": parseFloat(tm),
      "D365 FSM": parseFloat(d365),
    };
    const winner = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    return `🏆 ${winner}`;
  };

  const categories = [...new Set(overviewData.map((item) => item.category))];

  return (
    <div className="w-full h-screen overflow-auto bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                FSM Platform Comparison
              </h1>
              <p className="text-gray-600">
                Uptick vs Total Mobile vs Dynamics 365 Field Service
              </p>
              <p className="text-sm text-gray-500 mt-1">
                For Ventro Group - Fire Safety & Compliance Services
              </p>
            </div>
            <button
              onClick={downloadCSV}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download size={20} />
              Download CSV
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-6 py-3 font-medium ${
                activeTab === "overview"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Feature Comparison
            </button>
            <button
              onClick={() => setActiveTab("scorecard")}
              className={`px-6 py-3 font-medium ${
                activeTab === "scorecard"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Ventro Weighted Scorecard
            </button>
            <button
              onClick={() => setActiveTab("recommendations")}
              className={`px-6 py-3 font-medium ${
                activeTab === "recommendations"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Recommendations
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "overview" && (
              <div>
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Comprehensive Feature Analysis
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Detailed comparison across 60+ features grouped by
                    functionality
                  </p>
                </div>

                {/* Header Row */}
                <div className="grid grid-cols-12 bg-gray-800 text-white font-bold text-sm sticky top-0">
                  <div className="col-span-3 p-3 border-r border-gray-700">
                    Feature
                  </div>
                  <div className="col-span-2 p-3 border-r border-gray-700">
                    Uptick
                  </div>
                  <div className="col-span-2 p-3 border-r border-gray-700">
                    Total Mobile
                  </div>
                  <div className="col-span-2 p-3 border-r border-gray-700">
                    D365 FSM
                  </div>
                  <div className="col-span-3 p-3">Winner</div>
                </div>

                {/* Content by Category */}
                {categories.map((category, idx) => (
                  <CategorySection
                    key={idx}
                    category={category}
                    features={overviewData.filter(
                      (item) => item.category === category
                    )}
                  />
                ))}
              </div>
            )}

            {activeTab === "scorecard" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Ventro-Specific Weighted Scorecard
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Scores weighted by Ventro's strategic priorities and
                    business requirements
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-800 text-white">
                        <th className="p-3 text-left border">Criteria</th>
                        <th className="p-3 text-center border">Weight</th>
                        <th className="p-3 text-center border bg-orange-700">
                          Uptick Raw
                        </th>
                        <th className="p-3 text-center border bg-blue-700">
                          Total Mobile Raw
                        </th>
                        <th className="p-3 text-center border bg-green-700">
                          D365 Raw
                        </th>
                        <th className="p-3 text-center border bg-orange-600">
                          Uptick Weighted
                        </th>
                        <th className="p-3 text-center border bg-blue-600">
                          TM Weighted
                        </th>
                        <th className="p-3 text-center border bg-green-600">
                          D365 Weighted
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ventroScorecard.map((row, idx) => (
                        <tr
                          key={idx}
                          className={
                            row.criteria.includes("TOTAL")
                              ? "bg-yellow-100 font-bold text-lg"
                              : "hover:bg-gray-50"
                          }
                        >
                          <td className="p-3 border font-medium">
                            {row.criteria}
                          </td>
                          <td className="p-3 border text-center">
                            {row.weight}
                          </td>
                          <td className="p-3 border text-center">
                            {row.uptick}
                          </td>
                          <td className="p-3 border text-center">
                            {row.totalMobile}
                          </td>
                          <td className="p-3 border text-center">{row.d365}</td>
                          <td className="p-3 border text-center bg-orange-50 font-bold">
                            {row.uptickWeighted}
                          </td>
                          <td className="p-3 border text-center bg-blue-50 font-bold">
                            {row.tmWeighted}
                          </td>
                          <td className="p-3 border text-center bg-green-50 font-bold">
                            {row.d365Weighted}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Visual Score Comparison */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-6 text-center">
                    <div className="text-orange-700 font-bold text-sm mb-2">
                      UPTICK
                    </div>
                    <div className="text-4xl font-bold text-orange-600">
                      6.6
                    </div>
                    <div className="text-sm text-gray-600 mt-2">out of 10</div>
                    <div className="mt-4 text-xs text-gray-700">
                      <div className="font-bold mb-1">Strengths:</div>
                      <div>• Fire compliance</div>
                      <div>• Offline mobile</div>
                      <div>• Fast deployment</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 text-center">
                    <div className="text-blue-700 font-bold text-sm mb-2">
                      TOTAL MOBILE
                    </div>
                    <div className="text-4xl font-bold text-blue-600">5.05</div>
                    <div className="text-sm text-gray-600 mt-2">out of 10</div>
                    <div className="mt-4 text-xs text-gray-700">
                      <div className="font-bold mb-1">Position:</div>
                      <div>• Middle ground</div>
                      <div>• No clear differentiator</div>
                      <div>• Not recommended</div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
                    <div className="text-green-700 font-bold text-sm mb-2">
                      D365 FSM
                    </div>
                    <div className="text-4xl font-bold text-green-600">7.4</div>
                    <div className="text-sm text-gray-600 mt-2">out of 10</div>
                    <div className="mt-4 text-xs text-gray-700">
                      <div className="font-bold mb-1">Strengths:</div>
                      <div>• NetSuite integration</div>
                      <div>• AI scheduling</div>
                      <div>• Enterprise scale</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <div className="font-bold text-yellow-800 mb-2">
                    📊 Score Interpretation:
                  </div>
                  <ul className="text-sm text-yellow-900 space-y-1">
                    <li>
                      <strong>D365 FSM (7.4):</strong> Highest overall score -
                      best long-term enterprise platform
                    </li>
                    <li>
                      <strong>Uptick (6.6):</strong> Strong for immediate needs
                      - fire compliance & speed to deploy
                    </li>
                    <li>
                      <strong>Total Mobile (5.05):</strong> Falls between
                      specialized and enterprise without excelling at either
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "recommendations" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Strategic Recommendations for Ventro
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Based on weighted analysis and business requirements
                  </p>
                </div>

                {/* Scenario Analysis */}
                <div className="space-y-4 mb-8">
                  {recommendations.immediate.map((rec, idx) => (
                    <div
                      key={idx}
                      className={`border-2 rounded-lg p-6 ${
                        rec.recommendation === "RECOMMENDED"
                          ? "bg-green-50 border-green-500"
                          : rec.recommendation === "Not Competitive"
                          ? "bg-red-50 border-red-300"
                          : "bg-gray-50 border-gray-300"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-gray-800">
                          {rec.scenario}
                        </h3>
                        <span
                          className={`px-4 py-1 rounded-full text-sm font-bold ${
                            rec.recommendation === "RECOMMENDED"
                              ? "bg-green-600 text-white"
                              : rec.recommendation === "Not Competitive"
                              ? "bg-red-600 text-white"
                              : "bg-gray-600 text-white"
                          }`}
                        >
                          {rec.recommendation}
                        </span>
                      </div>
                      <p className="text-gray-700">{rec.reasoning}</p>
                    </div>
                  ))}
                </div>

                {/* Key Insights */}
                <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">
                    💡 Key Insights from Analysis
                  </h3>
                  <ul className="space-y-3">
                    {recommendations.keyInsights.map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-600 font-bold">•</span>
                        <span className="text-gray-800">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Implementation Timeline Visual */}
                {/* <div className="mt-8 bg-white border-2 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    Recommended Approach: Phased Migration
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-bold text-gray-600">
                        Month 1
                      </div>
                      <div className="flex-1 bg-gray-200 rounded p-3 text-sm">
                        📋 Discovery & Assessment
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-bold text-gray-600">
                        Months 2-4
                      </div>
                      <div className="flex-1 bg-orange-200 rounded p-3 text-sm font-bold">
                        🔶 UPTICK INTERIM - Consolidate 4 FSM tools
                        <div className="text-xs font-normal mt-1">
                          ✓ Immediate relief • Fire compliance • SimPro absorbed
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-bold text-gray-600">
                        Months 5-7
                      </div>
                      <div className="flex-1 bg-green-200 rounded p-3 text-sm font-bold">
                        ⚙️ D365 FSM BUILD - Configure & integrate
                        <div className="text-xs font-normal mt-1">
                          ✓ Parallel to Uptick ops • Celigo setup • Testing
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-24 text-sm font-bold text-gray-600">
                        Months 8-10
                      </div>
                      <div className="flex-1 bg-green-300 rounded p-3 text-sm font-bold">
                        🚀 D365 FSM MIGRATION - Final cutover
                        <div className="text-xs font-normal mt-1">
                          ✓ Single source migration • Uptick sunset • Go-live
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded p-4">
                    <div className="font-bold text-yellow-900 mb-2">
                      Why This Works:
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-yellow-800">
                          Immediate Value (Month 4):
                        </div>
                        <ul className="text-yellow-900 ml-4 mt-1 space-y-1">
                          <li>• 200+ engineers on unified platform</li>
                          <li>• Fire compliance from day 1</li>
                          <li>• SimPro absorbed seamlessly</li>
                        </ul>
                      </div>
                      <div>
                        <div className="font-semibold text-yellow-800">
                          Long-term Platform (Month 10):
                        </div>
                        <ul className="text-yellow-900 ml-4 mt-1 space-y-1">
                          <li>• Enterprise-grade D365 FSM</li>
                          <li>• NetSuite integration via Celigo</li>
                          <li>• Foundation for 50+ acquisitions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-lg p-4 text-center text-sm text-gray-600">
          <p>
            Prepared for Ventro Group Digital Transformation |{" "}
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FSMComparison;
