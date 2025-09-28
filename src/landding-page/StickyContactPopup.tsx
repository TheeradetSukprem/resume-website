"use client";

import { useState, useEffect } from "react";
import { Facebook, GitHub, LinkedIn, KeyboardArrowUp } from "@mui/icons-material";

export default function StickyContactPopup() {
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowContactPopup(scrollTop > 300); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 transition-all duration-500 ease-in-out ${
        showContactPopup 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-full pointer-events-none'
      }`}
    >
      {/* Contact Icons */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 shadow-lg hover:bg-white/20 transition-all duration-300">
        <div className="flex flex-col gap-3">
          {/* Facebook */}
          <a
            href="#"
            className="w-12 h-12 rounded-lg bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors group"
            aria-label="Facebook"
          >
            <Facebook className="text-white text-xl group-hover:scale-110 transition-transform" />
          </a>
          
          {/* GitHub */}
          <a
            href="#"
            className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-colors group"
            aria-label="GitHub"
          >
            <GitHub className="text-white text-xl group-hover:scale-110 transition-transform" />
          </a>
          
          {/* LinkedIn */}
          <a
            href="#"
            className="w-12 h-12 rounded-lg bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors group"
            aria-label="LinkedIn"
          >
            <LinkedIn className="text-white text-xl group-hover:scale-110 transition-transform" />
          </a>
          
          {/* Scroll to Top Button */}
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }}
            className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <KeyboardArrowUp className="text-white text-2xl group-hover:scale-110 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
}