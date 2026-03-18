'use client';

import React, { useState, useEffect } from'react';
import Link from'next/link';
import { usePathname } from'next/navigation';
import { useAuth } from'../context/AuthContext';
import { LogOut, ChevronDown } from'lucide-react';

const Header: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isProfileOpen, setIsProfileOpen] = useState(false);
 const pathname = usePathname();
 const { user, logout } = useAuth();

 useEffect(() => {
 // Close mobile menu on route change for better navigation experience
 setIsMenuOpen(false);
 setIsProfileOpen(false);
 }, [pathname]);
 
 const activeLinkClass ="font-semibold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text";
 const inactiveLinkClass ="text-gray-600 hover:text-primary-600 transition-colors";
 const mobileLinkClass ="block py-2 text-lg text-center";

 const isLinkActive = (path: string) => pathname === path;

 return (
 <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-16">
 <div className="flex-shrink-0">
  <Link href="/" className="flex items-center space-x-2" aria-label="QuickBillr Home">
    <svg className="h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
    <span className="text-xl font-bold text-gray-800">QuickBillr</span>
  </Link>
 </div>
 <nav className="hidden md:flex items-center space-x-8">
 <Link href="/blog"className={isLinkActive('/blog') ? activeLinkClass : inactiveLinkClass}>Blog</Link>
 <Link href="/about-quickbillr"className={isLinkActive('/about-quickbillr') ? activeLinkClass : inactiveLinkClass}>About</Link>
 <Link href="/contact-support"className={isLinkActive('/contact-support') ? activeLinkClass : inactiveLinkClass}>Contact</Link>
 </nav>
  <div className="flex items-center space-x-4">
  
  {user ? (
 <div className="relative">
 <button
 onClick={() => setIsProfileOpen(!isProfileOpen)}
 className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
 >
 <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">
 {user.name.charAt(0).toUpperCase()}
 </div>
 <ChevronDown size={16} className={`text-gray-500 transition-transform ${isProfileOpen ?'rotate-180':''}`} />
 </button>

 {isProfileOpen && (
 <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
 <div className="px-4 py-2 border-b border-gray-100">
 <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
 <p className="text-xs text-gray-500 truncate">{user.email}</p>
 </div>
 <button
 onClick={() => {
 logout();
 setIsProfileOpen(false);
 }}
 className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
 >
 <LogOut size={16} />
 <span>Sign Out</span>
 </button>
 </div>
 )}
 </div>
 ) : (
 <div className="hidden sm:flex items-center space-x-2">
 <Link
 href="/login"
 className="text-sm font-medium text-gray-600 hover:text-primary-600 px-3 py-2"
 >
 Log In
 </Link>
 <Link
 href="/signup"
 className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors shadow-sm"
 >
 Sign Up
 </Link>
 </div>
 )}

 <Link
 href="/free-invoice-generator"
 className="hidden lg:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
 >
 Create Invoice
 </Link>
 <div className="md:hidden ml-2">
 <button
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
 aria-controls="mobile-menu"
 aria-expanded={isMenuOpen}
 >
 <span className="sr-only">Open main menu</span>
 {isMenuOpen ? (
 <svg className="block h-6 w-6"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true">
 <path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M6 18L18 6M6 6l12 12"/>
 </svg>
 ) : (
 <svg className="block h-6 w-6"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true">
 <path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M4 6h16M4 12h16M4 18h16"/>
 </svg>
 )}
 </button>
 </div>
 </div>
 </div>

 {/* Mobile menu, show/hide based on menu state. */}
 {isMenuOpen && (
 <div className="md:hidden"id="mobile-menu">
 <div className="pt-2 pb-4 space-y-1">
 <Link href="/blog"className={`${mobileLinkClass} ${isLinkActive('/blog') ? activeLinkClass : inactiveLinkClass}`}>Blog</Link>
 <Link href="/about-quickbillr"className={`${mobileLinkClass} ${isLinkActive('/about-quickbillr') ? activeLinkClass : inactiveLinkClass}`}>About</Link>
 <Link href="/contact-support"className={`${mobileLinkClass} ${isLinkActive('/contact-support') ? activeLinkClass : inactiveLinkClass}`}>Contact</Link>
 
 {!user && (
 <div className="flex flex-col space-y-2 px-4 pt-2">
 <Link href="/login"className="w-full text-center py-2 text-gray-600 border border-gray-200 rounded-lg">Log In</Link>
 <Link href="/signup"className="w-full text-center py-2 bg-primary-600 text-white rounded-lg">Sign Up</Link>
 </div>
 )}

 <Link
 href="/free-invoice-generator"
 className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-700"
 >
 Create Invoice
 </Link>
 </div>
 </div>
 )}
 </div>
 </header>
 );
};

export default Header;
