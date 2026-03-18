import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | QuickBillr",
  description: "Read the QuickBillr privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://quickbillr.online/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 17, 2026";

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-8 text-sm italic">Last Updated: {lastUpdated}</p>

        <section className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <p>
            At QuickBillr, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and free invoice generator services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">1. Information We Collect</h2>
          <p>
            QuickBillr is designed to be a &quot;privacy-first&quot; tool. For the majority of our features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Invoice Data:</strong> Any information you enter into the invoice generator (names, addresses, amounts, etc.) is processed locally in your browser. We do not store this data on our servers unless you explicitly create an account and save your invoices.</li>
            <li><strong>Local Storage:</strong> We use browser local storage to help you save your progress and preferences between sessions. This data remains on your device.</li>
            <li><strong>Account Information:</strong> If you choose to sign up, we collect your name and email address to manage your account and saved templates.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website.</li>
            <li>Improve, personalize, and expand our services.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you, either directly or through one of our partners, for customer service or updates.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">3. Cookies and Tracking</h2>
          <p>
            We use essential cookies to maintain your session and security. We may also use standard analytics tools (like Google Analytics) to gather anonymous usage data to help us improve the platform. You can manage cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">4. Third-Party Services</h2>
          <p>
            We may use third-party services for specific features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>QR Code Generation:</strong> We use external APIs to generate QR codes for your invoices. Only the payment link you provide is sent to these services.</li>
            <li><strong>Authentication:</strong> We use secure providers (like Supabase) to manage user authentication.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information. However, please remember that no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10">7. Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@quickbillr.online.
          </p>
        </section>
      </div>
    </div>
  );
}
