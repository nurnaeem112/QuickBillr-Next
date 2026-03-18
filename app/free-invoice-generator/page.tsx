import React, { Suspense } from 'react';
import { Metadata } from 'next';
import InvoiceGeneratorClient from '../../components/InvoiceGeneratorClient';
import JsonLd from '../../components/JsonLd';

export const metadata: Metadata = {
  title: "Free Invoice Generator | Create Professional Invoices Online",
  description: "Use our free invoice generator to create professional invoices and estimates in seconds. Customize templates, add QR codes, and download as PDF. No signup required.",
  keywords: ["free invoice generator", "create invoice online", "invoice maker", "professional invoice template", "freelance invoicing"],
  alternates: {
    canonical: "https://quickbillr.online/free-invoice-generator",
  },
  openGraph: {
    title: "Free Invoice & Estimate Generator | QuickBillr",
    description: "Create and download professional invoices in seconds for free.",
    url: "https://quickbillr.online/free-invoice-generator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Invoice Generator | QuickBillr",
    description: "The easiest way to create professional invoices online for free.",
  },
};

export default function InvoiceBuilderPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "QuickBillr Invoice Generator",
          "url": "https://quickbillr.online/free-invoice-generator",
          "description": "A free online tool to create professional invoices and estimates.",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "All",
          "browserRequirements": "Requires JavaScript",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        }}
      />
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading Invoice Builder...</div>}>
        <InvoiceGeneratorClient />
      </Suspense>
    </>
  );
}
