"use client";

import React from 'react';
import { useTranslation } from "react-i18next";
import "../i18n/i18n";

const FooterSection = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50 py-12 overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center space-x-6 mb-6">
          {/* You can replace '#' with your actual social media links */}
          <a href="https://github.com/TheeradetSukprem" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">GitHub</a>
          <a href="https://www.linkedin.com/in/theeradet-sukprem/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">LinkedIn</a>
          <a href="https://www.facebook.com/TRDSUK/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-medium">Facebook</a>
        </div>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Theeradet Sukprem. {t("footer.rightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;