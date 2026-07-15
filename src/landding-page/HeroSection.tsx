"use client";

import { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import {
  SiFacebook,
  SiLinkedin,
  SiGithub,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import "../i18n/i18n";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function HeroSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    if (!section || !spotlight) return;
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      spotlight.style.setProperty("--spotlight-x", `${x}%`);
      spotlight.style.setProperty("--spotlight-y", `${y}%`);
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      if (prefersReducedMotion) {
        gsap.set([infoRef.current?.children, imageRef.current, ".hero-badge", ".hero-blob"].filter(Boolean), {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const tl = gsap.timeline();
      if (infoRef.current) {
        tl.fromTo(
          infoRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.15 }
        );
      }
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
      }

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        gsap.to(".hero-badge", {
          y: "-=10",
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: { each: 0.3, from: "random" },
        });

        gsap.to(".hero-blob", {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(".hero-badge", { clearProps: "all" });
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section id="home" ref={sectionRef} className="relative min-h-[88vh] bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Mouse-tracking Spotlight */}
      <div ref={spotlightRef} className="hero-spotlight" />

      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-20 relative z-10">

        {/* Profile Info Section */}
        <div ref={infoRef}>
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
              <SiFacebook className="text-xl" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="https://github.com/TheeradetSukprem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <SiGithub className="text-xl" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="https://www.linkedin.com/in/theeradet-sukprem/"
              aria-label="LinkedIn"
            >
              <SiLinkedin className="text-xl" />
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
        <div ref={imageRef} className="relative w-full max-w-[520px] mx-auto lg:ml-auto overflow-visible">
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
          <span className="hero-badge z-30 absolute top-4 -left-2 text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <SiJavascript className="text-lg text-[#F7DF1E]" />
            JavaScript
          </span>
          <span className="hero-badge z-30 absolute top-24 -right-2 text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <SiTypescript className="text-lg text-[#3178C6]" />
            TypeScript
          </span>
          <span className="hero-badge z-30 absolute top-40 -left-4 text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <SiReact className="text-lg text-[#61DAFB]" />
            React
          </span>
          <span className="hero-badge z-30 absolute bottom-24 -right-4 text-sm text-white bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <SiMysql className="text-lg text-[#4479A1]" />
            MySQL
          </span>
          <span className="hero-badge z-20 absolute bottom-6 left-10 text-sm text-white bg-white/5 backdrop-blur px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
            <SiGit className="text-orange-300" />
            Git
          </span>
        </div>
      </div>

      {/* Background Effects */}
      <div className="hero-blob pointer-events-none absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full bg-purple-600/20 blur-3xl" />
      <div className="hero-blob pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-3xl" />
    </section>
  );
}