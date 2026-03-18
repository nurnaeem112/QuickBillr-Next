import type { Metadata } from"next";
import { Inter } from"next/font/google";
import"./globals.css";
import Header from"../components/Header";
import Footer from"../components/Footer";
import { Providers } from"../components/Providers";

const inter = Inter({
 subsets: ["latin"],
 variable:"--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://quickbillr.online"),
  title: {
    default: "QuickBillr - Free Invoice & Estimate Generator",
    template: "%s | QuickBillr",
  },
  description: "A free invoice and estimate generator for freelancers and small businesses. Create professional invoices in seconds.",
  keywords: ["invoice generator", "free invoice", "estimate generator", "freelance billing", "small business tools"],
  authors: [{ name: "QuickBillr Team" }],
  creator: "QuickBillr",
  publisher: "QuickBillr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "QuickBillr - Free Invoice & Estimate Generator",
    description: "Create professional invoices and estimates for free.",
    url: "https://quickbillr.online/",
    siteName: "QuickBillr",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "QuickBillr Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickBillr - Free Invoice & Estimate Generator",
    description: "Create professional invoices and estimates for free.",
    images: ["/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en"suppressHydrationWarning>
 <body className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-800 `}>
 <Providers>
 <div className="flex flex-col min-h-screen">
 <Header />
 <main className="flex-grow">
 {children}
 </main>
 <Footer />
 </div>
 <div id="print-container"></div>
 </Providers>
 </body>
 </html>
 );
}
