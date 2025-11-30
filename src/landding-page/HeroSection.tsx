"use client";

import { Button } from "@mui/material";
import { Facebook, LinkedIn, GitHub } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[88vh] bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-20 relative z-10">
        
        {/* Profile Info Section */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <span className="text-lg">{t("hero.greeting")}</span>
            <span className="text-lg font-semibold text-indigo-400">
              Theeradet Sukprem
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-accent)]">
            {t("hero.title")}
          </h1>
          <div className="h-2 w-44 bg-cyan-400 rounded-full mt-3 mb-6 md:mb-8" />

          <p className="text-gray-500 max-w-xl leading-relaxed whitespace-pre-line">
            {t("hero.description")}
          </p>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4 text-gray-500">
            <span className="text-sm mr-2">{t("hero.followMe")}</span>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="https://www.facebook.com/TRDSUK/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook fontSize="small" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="https://github.com/TheeradetSukprem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub fontSize="small" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="https://www.linkedin.com/in/theeradet-sukprem/"
              aria-label="LinkedIn"
            >
              <LinkedIn fontSize="small" />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="flex flex-row gap-4">
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="contained"
              component="a"
              href="/files/theeradet-sukprem-cv.pdf"
              download
              className="!bg-[#6C4CF1] !text-white hover:!bg-[#5b40cc]"
              sx={{
                paddingX: 3,
                paddingY: 1.2,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              {t("hero.downloadCV")}
            </Button>
          </div>
          {/* Download Resume Button */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="contained"
              component="a"
              href="/files/theeradet-sukprem-resume.pdf"
              download
              className="!bg-[#6C4CF1] !text-white hover:!bg-[#5b40cc]"
              sx={{
                paddingX: 3,
                paddingY: 1.2,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              {t("hero.downloadResume")}
            </Button>
          </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="relative w-full max-w-[520px] mx-auto lg:ml-auto overflow-visible">
          <div className="relative z-10 w-[360px] h-[460px] mx-auto">
            <Image
              src="/me2.jpg"
              alt="Portrait of Theeradet Sukprem"
              fill
              sizes="(min-width: 1024px) 360px, 70vw"
              priority
              className="object-cover object-top rounded-3xl"
            />
          </div>

          {/* Tech Badges */}
          <span className="z-30 absolute top-4 -left-2 text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <Image src="/icons/javascript-icon.svg" alt="JavaScript" width={18} height={18} />
            JavaScript
          </span>
          <span className="z-30 absolute top-24 -right-2 text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <Image src="/icons/typescript-icon.svg" alt="TypeScript" width={18} height={18} />
            TypeScript
          </span>
          <span className="z-30 absolute top-40 -left-4 text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <Image src="/icons/react-icon.svg" alt="React" width={18} height={18} />
            React
          </span>
          <span className="z-30 absolute bottom-24 -right-4 text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <Image src="/icons/mysql-icon.svg" alt="MySQL" width={18} height={18} />
            MySQL
          </span>
          <span className="z-20 absolute bottom-6 left-10 text-sm text-white bg-white/5 backdrop-blur px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
            <GitHub fontSize="inherit" className="text-orange-300" />
            Git
          </span>
        </div>
      </div>

      {/* Background Effects */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-purple-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-3xl" />
    </section>
  );
}