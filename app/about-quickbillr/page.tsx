import React from'react';
import { Metadata } from'next';

export const metadata: Metadata = {
 title:'About QuickBillr – Our Mission to Simplify Invoicing for Freelancers',
 description:'Learn about QuickBillr and our mission to simplify invoicing for freelancers and small businesses worldwide with fast, modern, and completely free billing tools.',
 keywords:'about quickbillr, invoicing software company, freelancer tools platform, billing solutions, invoice startup',
 alternates: {
 canonical:'https://quickbillr.online/about-quickbillr',
 },
 robots:'index, follow',
 openGraph: {
 title:'Free Invoice Generator for Freelancers | QuickBillr',
 description:'Create professional invoices in seconds with QuickBillr.',
 type:'website',
 url:'https://quickbillr.com/',
 },
 twitter: {
 card:'summary_large_image',
 title:'Free Invoice Generator for Freelancers | QuickBillr',
 description:'Create invoices easily with QuickBillr.',
 },
};

const AboutPage = () => {
 return (
 <div className="bg-white py-16 sm:py-24">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center">
 <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700 tracking-wide uppercase">About Us</p>
 <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
 Empowering Your Business
 </h1>
 <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
 At QuickBillr, we believe billing should be the easiest part of your job, not the hardest.
 </p>
 </div>

 <div className="mt-12 prose prose-lg text-gray-600 mx-auto">
 <h2 className="">Our Story</h2>
 <p>
 QuickBillr was born from a simple frustration: creating professional invoices and estimates was a tedious, time-consuming process. As freelancers and small business owners ourselves, we spent too much time fiddling with templates and spreadsheets. We knew there had to be a better way.
 </p>
 <p>
 We envisioned a tool that was fast, intuitive, and flexible. A platform where you could generate a beautiful, accurate invoice in seconds, not minutes. We focused on what matters: clean templates, multi-language and currency support, and modern features like QR code payments to help you get paid faster.
 </p>
 
 <h2 className="">How It Works</h2>
 <ol>
 <li><strong>Fill in the Details:</strong> Enter your and your client&apos;s information into our simple, straightforward form.</li>
 <li><strong>Add Your Items:</strong> List your services or products. Our clean interface makes it easy to add items, quantities, and rates.</li>
 <li><strong>Customize & Preview:</strong> Choose a template that fits your brand. Watch your invoice update in real-time with our live preview panel.</li>
 <li><strong>Download & Send:</strong> Once you&apos;re happy, download a pixel-perfect PDF and get paid faster.</li>
 </ol>
 
 <h2 className="">Our Mission</h2>
 <p>
 Our mission is to provide freelancers, consultants, and small businesses with the tools they need to succeed. We&apos;re committed to building a product that is not only powerful but also accessible and easy to use. We handle the paperwork, so you can focus on what you do best: growing your business.
 </p>
 </div>
 </div>
 </div>
 );
};

export default AboutPage;
