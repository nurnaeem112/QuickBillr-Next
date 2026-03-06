import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import InvoiceBuilderPage from './pages/InvoiceBuilderPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';


import GetPaidFaster from './pages/blog/GetPaidFaster';
import InvoicingMistakes from './pages/blog/InvoicingMistakes';
import BrandingYourBusiness from './pages/blog/BrandingYourBusiness';
import TaxSeasonPrep from './pages/blog/TaxSeasonPrep';
import RemoteWorkBilling from './pages/blog/RemoteWorkBilling';
import FutureOfBilling from './pages/blog/FutureOfBilling';


import HowtoCreateanInvoice from './pages/blog/HowtoCreateanInvoice';
import HowToAvoidLatePaymentsFromClients from './pages/blog/HowtoAvoidLatePaymentsfromClients';
import  OnlineInvoiceVsPaperInvoice from './pages/blog/OnlineInvoicevsPaperInvoice';
import FreeInvoiceBuilder from './pages/blog/FreeInvoiceBuilder';
import BestInvoiceSoftwareforSmallBusiness from './pages/blog/BestInvoiceSoftwareforSmallBusines';
import TheUltimateGuideToInvoiceSoftware from './pages/blog/The Ultimate Guide to Invoice Software';
import InvoiceTemplateVsInvoiceSoftware from './pages/blog/Invoice Template vs Invoice Software';
import BestInvoiceSoftwareForFreelancers from './pages/blog/Best Invoice Software for Freelancers (2026 Guide)';
import WhatShouldBeIncludedInAnInvoice from './pages/blog/What Should Be Included in an Invoice';
import HowToNumberInvoicesProperly from './pages/blog/How to Number Invoices Properly'; 
import HowToSendAnInvoiceByEmailProfessionally from './pages/blog/How to Send an Invoice by Email Professionally';
import HowToHandleLatePayments from './pages/blog/How to Handle Late Payments';
import RecurringInvoicesExplained from './pages/blog/Recurring Invoices Explained';
import InvoiceMistakesCostSmallBusinessesMoney from './pages/blog/Invoice Mistakes That Cost Small Businesses Money';
import HowToAddTaxAndDiscountsToAnInvoice from './pages/blog/How to Add Tax and Discounts to an Invoice';
import InvoiceDueDateTermsExplained from './pages/blog/Invoice Due Date Terms Explained';
import EstimateVsInvoice from './pages/blog/Estimate vs Invoice';




import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProtectedRoute from './components/ProtectedRoute';



import { LenisScroll } from './components/LenisScroll';





const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-200">
          
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/free-invoice-generator" element={<InvoiceBuilderPage />} />
              <Route path="/about-quickbillr" element={<AboutPage />} />
              <Route path="/contact-support" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              

               <Route path="/blog/get-paid-faster" element={<GetPaidFaster />} />
               <Route path="/blog/invoicing-mistakes" element={<InvoicingMistakes />} />
               <Route path="/blog/branding-your-business" element={<BrandingYourBusiness />} />
               <Route path="/blog/tax-season-prep" element={<TaxSeasonPrep />} />
               <Route path="/blog/remote-work-billing" element={<RemoteWorkBilling />} />
               <Route path="/blog/the-future-of-billing" element={<FutureOfBilling />} />
               
               
               <Route path="/blog/how-to-avoid-late-payments-from-clients" element={<HowToAvoidLatePaymentsFromClients />} />
               <Route path="/blog/how-to-create-an-invoice" element={<HowtoCreateanInvoice />} />
               <Route path="/blog/online-invoice-vs-paper-invoice" element={<OnlineInvoiceVsPaperInvoice />} />
               <Route path="/blog/free-invoice-builder" element={<FreeInvoiceBuilder />} />
               <Route path="/blog/best-invoice-software-for-small-business" element={<BestInvoiceSoftwareforSmallBusiness />} />
               <Route path="/blog/the-ultimate-guide-to-invoice-software" element={<TheUltimateGuideToInvoiceSoftware />} />
               <Route path="/blog/best-invoice-software-for-freelancers" element={<BestInvoiceSoftwareForFreelancers />} /> 
               <Route path="/blog/what-should-be-included-in-an-invoice" element={<WhatShouldBeIncludedInAnInvoice />} />
               <Route path="/blog/invoice-template-vs-software" element={<InvoiceTemplateVsInvoiceSoftware />} />
               <Route path="/blog/how-to-number-invoices-properly" element={<HowToNumberInvoicesProperly />} />
               <Route path="/blog/how-to-send-an-invoice-by-email-professionally" element={<HowToSendAnInvoiceByEmailProfessionally />} />
               <Route path="/blog/how-to-handle-late-payments" element={<HowToHandleLatePayments />} />
               <Route path="/blog/recurring-invoices-explained" element={<RecurringInvoicesExplained />} />                
               <Route path="/blog/invoice-mistakes-cost-small-businesses-money" element={<InvoiceMistakesCostSmallBusinessesMoney />} />         
               <Route path="/blog/how-to-add-tax-and-discounts-to-an-invoice" element={<HowToAddTaxAndDiscountsToAnInvoice />} />
               <Route path="/blog/invoice-due-date-terms-explained" element={<InvoiceDueDateTermsExplained />} />
               <Route path="/blog/estimate-vs-invoice" element={<EstimateVsInvoice />} />


              <Route path="/login" element={<LoginPage />} />
               <Route path="/signup" element={<SignupPage />} />
            </Routes>
          </main>

          <Footer />

        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
