"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import Image from 'next/image';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentLanguage = i18n.language;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto  px-4 sm:px-6 lg:px-8  flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold text-gray-800">
            <Image src="/logo/navbar-logo.png" height={40} width={100} alt="TSG Logo" priority />
        </div>

        {/* Link section */}
        <div className="hidden md:flex space-x-20">
          <ul className="flex items-center space-x-6 lg:space-x-8 text-gray-600 font-medium gap-8">
            <li>
              <a
                href="#"
                className="hover:text-[var(--color-accent)] transition-colors"
              >
                {t("Home")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:hover:text-[var(--color-accent)] transition-colors"
              >
                {t("About")}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:hover:text-[var(--color-accent)] transition-colors"
              >
                {t("Portfolio")}
              </a>
            </li>
            <li>
              <a
                href="#"
               className="hover:hover:text-[var(--color-accent)] transition-colors"
              >
                {t("Contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* language section */}
        <div>
          <Button
            onClick={() => i18n.changeLanguage("en")}
            style={{ color: currentLanguage === "en" ? "var(--color-accent)" : "black" }}
          >
            EN
          </Button>
          |
          <Button
            onClick={() => i18n.changeLanguage("th")}
            style={{ color: currentLanguage === "th" ? "var(--color-accent)" : "black" }}
          >
            TH
          </Button>
        </div>
      </div>
    </nav>
  );
}
