import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | QuickBillr",
  description: "Review the terms and conditions for using QuickBillr's free invoice and estimate generator services.",
  alternates: {
    canonical: "https://quickbillr.online/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  const lastUpdated = "March 17, 2026";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-8 text-sm italic">Last Updated: {lastUpdated}</p>

        <section className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <p>
            Welcome to QuickBillr. By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">1. Use of Service</h2>
          <p>
            QuickBillr provides a free tool for generating invoices and estimates. You are responsible for all data you enter into the generator. You agree not to use the service for any illegal or unauthorized purpose.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">2. User Accounts</h2>
          <p>
            While many features are available without an account, certain features (like saving invoices) require registration. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">3. Intellectual Property</h2>
          <p>
            The QuickBillr platform, including its design, logos, and code, is the property of QuickBillr. Our templates are provided for your use in creating documents, but you may not resell or redistribute the underlying template designs as your own.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">4. Limitation of Liability</h2>
          <p>
            QuickBillr is provided &quot;as is&quot; without any warranties. We are not responsible for any financial losses, tax errors, or legal disputes that may arise from the use of invoices generated on our platform. It is your responsibility to ensure your invoices comply with local laws and regulations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">5. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which QuickBillr operates, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of significant changes where possible.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at support@quickbillr.online.
          </p>
        </section>
      </div>
    </div>
  );
}
