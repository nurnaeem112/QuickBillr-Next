import React from 'react';
import { Metadata } from 'next';
import ContactPageContent from './ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact QuickBillr Support | Get Help With Invoicing & Billing',
  description: "Need help with QuickBillr? Contact our support team for assistance with invoices, billing, or technical questions. We're here to help freelancers and businesses succeed.",
  keywords: 'contact quickbillr, invoice support, billing help, customer support invoicing software',
  alternates: {
    canonical: 'https://quickbillr.online/contact-support',
  },
  robots: 'index, follow',
  openGraph: {
    title: 'Free Invoice Generator for Freelancers | QuickBillr',
    description: 'Create professional invoices in seconds with QuickBillr.',
    type: 'website',
    url: 'https://quickbillr.com/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice Generator for Freelancers | QuickBillr',
    description: 'Create invoices easily with QuickBillr.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
