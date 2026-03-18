import React from'react';
import Link from'next/link';
import { blogPosts } from'../data/blogPosts';
import { TEMPLATES } from'../constants';
import { Metadata } from'next';
import JsonLd from'../components/JsonLd';

export const metadata: Metadata = {
 title:"Free Invoice Generator for Freelancers & Small Businesses | QuickBillr",
 description:"Create professional invoices in seconds with QuickBillr — a free invoice generator built for freelancers and small businesses. Customize templates, support multiple currencies, add QR code payments, and get paid faster.",
 keywords: ["free invoice generator","invoice maker","create invoice online","freelancer invoice","small business invoicing","professional invoice template","billing software","estimate generator"],
 alternates: {
 canonical:"https://quickbillr.online/",
 },
 openGraph: {
 title:"Free Invoice Generator for Freelancers | QuickBillr",
 description:"Create professional invoices in seconds with QuickBillr.",
 url:"https://quickbillr.online/",
 type:"website",
 },
 twitter: {
 card:"summary_large_image",
 title:"Free Invoice Generator for Freelancers | QuickBillr",
 description:"Create invoices easily with QuickBillr.",
 },
};

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
 <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
 <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white mb-4">
 {icon}
 </div>
 <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
 <p className="mt-2 text-base text-gray-600">{description}</p>
 </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string; role: string; avatar: string }> = ({ quote, author, role, avatar }) => (
 <div className="bg-white p-6 rounded-lg shadow-md text-center">
 <img className="w-16 h-16 rounded-full mx-auto mb-4"src={avatar} alt={`Headshot of ${author}, ${role}`} />
 <p className="text-gray-600 italic">&quot;{quote}&quot;</p>
 <p className="mt-4 font-semibold text-gray-900">{author}</p>
 <p className="text-sm text-gray-500">{role}</p>
 </div>
);

const TemplateMarquee: React.FC<{ vertical?: boolean; reverse?: boolean; speed?: number }> = ({ 
 vertical = false, 
 reverse = false,
 speed = 60 
}) => {
 const heroTemplates = TEMPLATES.filter(t => t.showInHero);
 const displayTemplates = [...heroTemplates, ...heroTemplates, ...heroTemplates, ...heroTemplates];

 if (heroTemplates.length === 0) return null;

 const animationName = vertical 
 ? (reverse ?'marquee-vertical-reverse':'marquee-vertical')
 :'marquee';

 if (vertical) {
 return (
 <div className="relative h-full w-full overflow-hidden py-4">
 <div 
 className="flex flex-col items-center hover:[animation-play-state:paused]"
 style={{
 animation: `${animationName} ${speed}s linear infinite`
 }}
 >
 {displayTemplates.map((template, idx) => (
 <div key={`${template.id}-${idx}`} className="flex-shrink-0 py-4 w-full px-4">
 <Link
 href={`/free-invoice-generator?template=${template.id}`}
 className="group block relative w-full aspect-[1/1.414] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105"
 >
 <img
 src={template.image as string}
 alt={template.name}
 className="w-full h-full object-cover"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
 <div className="text-center px-2">
 <span className="bg-white text-primary-700 font-bold py-1.5 px-3 rounded-lg shadow-lg text-xs block mb-1 whitespace-nowrap">
 Use {template.name}
 </span>
 </div>
 </div>
 </Link>
 </div>
 ))}
 </div>

 <style>{`
 @keyframes marquee-vertical {
 0% { transform: translateY(0); }
 100% { transform: translateY(-50%); }
 }
 @keyframes marquee-vertical-reverse {
 0% { transform: translateY(-50%); }
 100% { transform: translateY(0); }
 }
 `}</style>
 </div>
 );
 }

 return (
 <div className="relative w-full overflow-hidden py-10">
 <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"/>
 <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"/>

 <div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">
 {displayTemplates.map((template, idx) => (
 <div key={`${template.id}-${idx}`} className="flex-shrink-0 px-4">
 <Link
 href={`/free-invoice-generator?template=${template.id}`}
 className="group block relative w-48 md:w-64 aspect-[1/1.414] bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
 >
 <img
 src={template.image as string}
 alt={template.name}
 className="w-full h-full object-cover"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
 <div className="text-center px-4">
 <span className="bg-white text-primary-700 font-bold py-2 px-4 rounded-lg shadow-lg text-sm block mb-2 whitespace-nowrap">
 Use {template.name}
 </span>
 <span className="text-white text-xs font-semibold drop-shadow-md">
 Click to Open
 </span>
 </div>
 </div>
 </Link>
 </div>
 ))}
 </div>

 <style>{`
 @keyframes marquee {
 0% { transform: translateX(0); }
 100% { transform: translateX(-50%); }
 }
 .animate-marquee {
 animation: marquee 40s linear infinite;
 }
 `}</style>
 </div>
 );
};

export default function HomePage() {
 const features = [
 {
 icon: <svg xmlns="http://www.w3.org/2000/svg"className="h-6 w-6"fill="none"viewBox="0 0 24 24"stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3"/></svg>,
 title:'Global Ready',
 description:'Bill clients worldwide with support for 20+ languages and all major currencies.'
 },
 {
 icon: <svg xmlns="http://www.w3.org/2000/svg"className="h-6 w-6"fill="none"viewBox="0 0 24 24"stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>,
 title:'Customizable Templates',
 description:'Choose from a variety of free and premium templates to match your brand\'s style perfectly.'
 },
 {
 icon: <svg xmlns="http://www.w3.org/2000/svg"className="h-6 w-6"fill="none"viewBox="0 0 24 24"stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M12 4v1m0 8v1m0 8v1m-4-8h1m8 0h1M4 12h1m8 0h1m-5-4v1m0 8v1m-4-4h1m8 0h1m-4-4h1m-1 8h1"/><path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M4 4h4v4H4zM16 4h4v4h-4zM4 16h4v4H4zM16 16h4v4h-4z"/></svg>,
 title:'Easy Payments with QR Codes',
 description:'Add a scannable QR code to your invoices linked to your payment page for faster payments.'
 },
 {
 icon: <svg xmlns="http://www.w3.org/2000/svg"className="h-6 w-6"fill="none"viewBox="0 0 24 24"stroke="currentColor"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>,
 title:'Instant Downloads',
 description:'Download your document as a professional PDF with a single click, ready to send to your client.'
 },
 ];

 const testimonials = [
 {
 quote:'QuickBillr has been a game-changer for my freelance business. I can create and send invoices in under a minute!',
 author:'Sarah L.',
 role:'Freelance Designer',
 avatar:'https://picsum.photos/id/1011/100/100'
 },
 {
 quote:'The live preview feature is amazing. It helps me catch any mistakes before I send the invoice. Highly recommended.',
 author:'Michael B.',
 role:'Consultant',
 avatar:'https://picsum.photos/id/1005/100/100'
 },
 {
 quote:'I love the professional templates. They make my small business look so much more established and professional.',
 author:'Jessica P.',
 role:'Small Business Owner',
 avatar:'https://picsum.photos/id/1027/100/100'
 }
 ];

 const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "QuickBillr",
          "operatingSystem": "Any",
          "applicationCategory": "BusinessApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": "Create professional invoices and estimates for free with QuickBillr. Multi-language support, QR code payments, and instant PDF downloads.",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1250"
          }
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "QuickBillr",
          "url": "https://quickbillr.online",
          "logo": "https://quickbillr.online/icon.png",
          "sameAs": [
            "https://twitter.com/quickbillr",
            "https://facebook.com/quickbillr"
          ]
        }}
      />
      {/* Hero Section */}
 <section className="bg-white overflow-hidden min-h-[80vh] flex items-center">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
 <div className="grid lg:grid-cols-2 gap-12 items-center">
 <div className="text-left">
 <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
 Create Professional Invoices & Estimates in <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text">Seconds</span>
 </h1>
 <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
 Free, simple, and globally compatible with multi-language support, currency options, and QR code payments — perfect for freelancers and small businesses.
 </p>
 <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
 <Link
 href="/free-invoice-generator"
 className="inline-block px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl shadow-xl hover:shadow-primary-500/25 hover:brightness-110 transition-all transform hover:scale-105"
 >
 Try Free Now
 </Link>
 <Link
 href="/about-quickbillr"
 className="inline-block px-10 py-4 text-gray-700 font-bold rounded-xl border border-gray-300 hover:bg-gray-50 transition-all"
 >
 Learn More
 </Link>
 </div>
 
 <div className="mt-12 flex items-center gap-6 opacity-60 grayscale">
 <div className="flex items-center gap-2">
 <svg className="w-5 h-5 text-primary-600"fill="currentColor"viewBox="0 0 20 20"><path fillRule="evenodd"d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"clipRule="evenodd"/></svg>
 <span className="text-sm font-semibold">No Signup Required</span>
 </div>
 </div>
 </div>

 <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-50 rounded-full blur-3xl -z-10 opacity-60"/>
 
 <div className="w-full h-full grid grid-cols-3 gap-2 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
 <div className="h-full">
 <TemplateMarquee vertical={true} reverse={true} speed={70} />
 </div>
 <div className="h-full">
 <TemplateMarquee vertical={true} reverse={false} speed={50} />
 </div>
 <div className="h-full">
 <TemplateMarquee vertical={true} reverse={true} speed={80} />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Features Section */}
 <section className="py-24 bg-white border-t border-gray-100">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16">
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Everything You Need to Get Paid Faster</h2>
 <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Powerful features to streamline your billing process and maintain professionalism.</p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {features.map(feature => (
 <FeatureCard key={feature.title} {...feature} />
 ))}
 </div>
 </div>
 </section>

 {/* Featured Blog Section */}
 <section className="py-20 bg-white">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
 <div className="max-w-2xl">
 <h2 className="text-3xl font-bold text-gray-900">Latest from Our Blog</h2>
 <p className="mt-4 text-lg text-gray-600">Expert advice and insights to help your business grow and thrive.</p>
 </div>
 <div className="mt-6 md:mt-0">
 <Link href="/blog"className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
 View all posts
 <svg className="ml-2 w-5 h-5"fill="none"stroke="currentColor"viewBox="0 0 24 24"><path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
 </Link>
 </div>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {featuredPosts.map(post => (
 <Link 
 key={post.id} 
 href={`/blog/${post.id}`}
 className="group flex flex-col bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
 >
 <div className="relative h-48 overflow-hidden">
 <img 
 src={post.imageUrl} 
 alt={post.title} 
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
 />
 </div>
 <div className="p-6">
 <div className="flex items-center text-xs font-medium text-primary-600 mb-2">
 <span>{post.date}</span>
 <span className="mx-2 text-gray-300">•</span>
 <span>{post.readTime}</span>
 </div>
 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
 {post.title}
 </h3>
 <p className="text-gray-600 text-sm line-clamp-3">
 {post.description}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 
 {/* Testimonials Section */}
 <section className="py-20 bg-gray-50">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold text-gray-900">Loved by Professionals Worldwide</h2>
 <p className="mt-4 text-lg text-gray-600">Don&apos;t just take our word for it. Here&apos;s what our users say.</p>
 </div>
 <div className="grid md:grid-cols-3 gap-8">
 {testimonials.map(testimonial => (
 <TestimonialCard key={testimonial.author} {...testimonial} />
 ))}
 </div>
 </div>
 </section>
 </div>
 );
}
