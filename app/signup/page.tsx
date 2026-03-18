'use client';

import React, { useState } from'react';
import { useRouter } from'next/navigation';
import { supabase } from'../../supabaseClient';
import { UserPlus, Mail, Lock, User, AlertCircle, Loader2 } from'lucide-react';
import Link from'next/link';

export default function SignupPage() {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const [isSubmitting, setIsSubmitting] = useState(false);
 const router = useRouter();

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setError('');
 setIsSubmitting(true);

 try {
 const { data, error } = await supabase.auth.signUp({
 email,
 password,
 options: {
 data: {
 name: name,
 },
 },
 });

 if (error) {
 setError(error.message);
 } else if (data.user && !data.session) {
 // Redirect to login with email and success flag via query params
 router.push(`/login?email=${encodeURIComponent(email)}&signupSuccess=true`);
 } else {
 router.push('/');
 }
 } catch {
 setError('Something went wrong. Please try again.');
 } finally {
 setIsSubmitting(false);
 }
 };

 const handleGoogleLogin = async () => {
 setError('');
 try {
 const { error } = await supabase.auth.signInWithOAuth({
 provider:'google',
 options: {
 redirectTo: typeof window !=='undefined'? window.location.origin :'',
 },
 });
 if (error) setError(error.message);
 } catch {
 setError('Failed to connect to Google. Please try again.');
 }
 };

 return (
 <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12 bg-gray-50">
 <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
 <div className="text-center">
 <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
 <UserPlus size={32} />
 </div>
 <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
 <p className="mt-2 text-sm text-gray-600">
 Join QuickBillr to manage your invoices effortlessly
 </p>
 </div>

 {error && (
 <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm">
 <AlertCircle size={18} />
 {error}
 </div>
 )}

 <form className="mt-8 space-y-6"onSubmit={handleSubmit}>
 <div className="space-y-4">
 <div>
 <label htmlFor="full-name"className="block text-sm font-medium text-gray-700 mb-1">
 Full Name
 </label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
 <User size={18} />
 </div>
 <input
 id="full-name"
 name="name"
 type="text"
 required
 value={name}
 onChange={(e) => setName(e.target.value)}
 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
 placeholder="John Doe"
 />
 </div>
 </div>
 <div>
 <label htmlFor="email-address"className="block text-sm font-medium text-gray-700 mb-1">
 Email Address
 </label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
 <Mail size={18} />
 </div>
 <input
 id="email-address"
 name="email"
 type="email"
 autoComplete="email"
 required
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
 placeholder="name@example.com"
 />
 </div>
 </div>
 <div>
 <label htmlFor="password"className="block text-sm font-medium text-gray-700 mb-1">
 Password
 </label>
 <div className="relative">
 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
 <Lock size={18} />
 </div>
 <input
 id="password"
 name="password"
 type="password"
 autoComplete="new-password"
 required
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
 placeholder="••••••••"
 />
 </div>
 </div>
 </div>

 <div>
 <button
 type="submit"
 disabled={isSubmitting}
 className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
 >
 {isSubmitting ? (
 <Loader2 className="animate-spin mr-2"size={20} />
 ) : (
'Create Account'
 )}
 </button>
 </div>
 </form>

 <div className="relative my-6">
 <div className="absolute inset-0 flex items-center">
 <div className="w-full border-t border-gray-300"></div>
 </div>
 <div className="relative flex justify-center text-sm">
 <span className="px-2 bg-white text-gray-500">Or continue with</span>
 </div>
 </div>

 <button
 onClick={handleGoogleLogin}
 className="w-full flex items-center justify-center gap-3 py-2.5 px-4 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors"
 >
 <svg className="w-5 h-5"viewBox="0 0 24 24">
 <path
 fill="#4285F4"
 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
 />
 <path
 fill="#34A853"
 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
 />
 <path
 fill="#FBBC05"
 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
 />
 <path
 fill="#EA4335"
 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
 />
 </svg>
 Continue with Google
 </button>

 <div className="text-center mt-4">
 <p className="text-sm text-gray-600">
 Already have an account?{''}
 <Link href="/login"className="font-medium text-primary-600 hover:text-primary-500">
 Sign in instead
 </Link>
 </p>
 </div>
 </div>
 </div>
 );
}
