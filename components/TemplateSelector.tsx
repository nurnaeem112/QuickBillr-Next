'use client';

import { useState, useEffect, useRef } from"react";
import Image from "next/image";
import { TEMPLATES } from"../constants";

export default function TemplateSelector({ selectedTemplate, setSelectedTemplate }) {
 const [isOpen, setIsOpen] = useState(false);
 const containerRef = useRef<HTMLDivElement>(null);

 // 🔒 Close on click outside
 useEffect(() => {
 function handleClickOutside(event: MouseEvent) {
 if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
 setIsOpen(false);
 }
 }
 document.addEventListener("mousedown", handleClickOutside);
 return () => document.removeEventListener("mousedown", handleClickOutside);
 }, []);

 return (
 <div className="mt-6 relative"ref={containerRef}>
 <h3 className="text-gray-700 font-semibold mb-2">
 Choose Template
 </h3>

 {/* Outer box */}
 <div
 className={`border rounded-lg bg-white transition-all duration-300 overflow-hidden ${
 isOpen ?"shadow-lg":"hover:shadow-md cursor-pointer"
 }`}
 onClick={() => !isOpen && setIsOpen(true)} // ✅ open when clicking preview only
 >
 <div
 className={`grid grid-cols-2 gap-2 transition-all duration-300 ${
 isOpen
 ?"max-h-[500px] overflow-y-auto p-2"
 :"max-h-[200px] p-2 pointer-events-none"// disable clicks when closed
 }`}
 >
 {TEMPLATES.map((t) => (
 <div
 key={t.id}
 className={`relative rounded-lg overflow-hidden border transition-all duration-200 ${
 selectedTemplate === t.id ?"ring-2 ring-blue-500":""
 }`}
 onClick={(e) => {
 if (!isOpen) return; // prevent selecting when closed
 e.stopPropagation();
 setSelectedTemplate(t.id);
 }}
 >
 <Image
 src={t.image}
 alt={t.name}
 fill
 className="w-full h-full object-contain bg-white"
 unoptimized
 />
 </div>
 ))}
 </div>
 </div>
 </div>
 );
}
