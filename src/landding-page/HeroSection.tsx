"use client";

import { Button } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-[88vh] text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-20">
        
        {/* Profile Info Section */}
        <div>
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <span className="text-lg">Hello, I'm</span>
            <span className="text-lg font-semibold text-indigo-400">
              Theeradet Sukprem
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--color-accent)]">
            Full Stack Developer
          </h1>
          <div className="h-2 w-44 bg-cyan-400 rounded-full mt-3 mb-6 md:mb-8" />

          <p className="text-gray-500 max-w-xl leading-relaxed">
            Hi, I'm Gang. I'm someone who values structured planning and
            high-quality results. I constantly seek to learn new things and
            keep myself up to date with the latest technologies. I believe
            that continuous improvement is essential for long-term success.
            With a strong sense of responsibility and a passion for teamwork,
            I'm confident in my ability to communicate effectively and solve
            problems on the spot when needed. I'm especially interested in
            pursuing a career in the Architect field where thoughtful design
            meets practical execution. My goal is to create work that is not
            only functional and efficient but also sustainable and meaningful.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4 text-gray-500">
            <span className="text-sm mr-2">Follow me</span>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="#"
              aria-label="Facebook"
            >
              <Facebook fontSize="small" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="#"
              aria-label="Instagram"
            >
              <Instagram fontSize="small" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="#"
              aria-label="Twitter"
            >
              <Twitter fontSize="small" />
            </a>
            <a
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:text-[var(--color-accent)] hover:bg-[var(--color-neutral-bg)]"
              href="#"
              aria-label="LinkedIn"
            >
              <LinkedIn fontSize="small" />
            </a>
          </div>

          {/* Download CV Button */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              variant="contained"
              className="!bg-[#6C4CF1] !text-white hover:!bg-[#5b40cc]"
              sx={{
                paddingX: 3,
                paddingY: 1.2,
                borderRadius: "12px",
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Download CV
            </Button>
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
          <span className="z-30 absolute top-4 -left-2 text-sm text-black bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <Image src="/icons/javascript-icon.svg" alt="JavaScript" width={18} height={18} />
            JavaScript
          </span>
          <span className="z-30 absolute top-24 -right-2 text-sm text-black bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <Image src="/icons/typescript-icon.svg" alt="TypeScript" width={18} height={18} />
            TypeScript
          </span>
          <span className="z-30 absolute top-40 -left-4 text-sm text-black bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <Image src="/icons/react-icon.svg" alt="React" width={18} height={18} />
            React
          </span>
          <span className="z-30 absolute bottom-24 -right-4 text-sm text-black bg-white/10 backdrop-blur-md px-4 py-2 rounded-full ring-1 ring-white/20 inline-flex items-center gap-2 shadow-lg">
            <Image src="/icons/mysql-icon.svg" alt="MySQL" width={18} height={18} />
            MySQL
          </span>
          <span className="z-20 absolute bottom-6 left-10 text-sm text-black bg-white/5 backdrop-blur px-3 py-1 rounded-full border border-white/10 inline-flex items-center gap-1">
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