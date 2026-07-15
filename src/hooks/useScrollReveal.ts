"use client";

import { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type RevealVariant = "fadeUp" | "staggerIn" | "fadeIn";

interface UseScrollRevealOptions {
  variant: RevealVariant;
  selector?: string;
  stagger?: number;
  start?: string;
  once?: boolean;
}

const VARIANT_FROM: Record<RevealVariant, gsap.TweenVars> = {
  fadeUp: { opacity: 0, y: 40 },
  staggerIn: { opacity: 0, y: 40 },
  fadeIn: { opacity: 0 },
};

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  { variant, selector, stagger = 0.12, start = "top 80%", once }: UseScrollRevealOptions
) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;

      const targets: gsap.TweenTarget = selector
        ? gsap.utils.toArray<HTMLElement>(selector, ref.current)
        : ref.current;

      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(targets, VARIANT_FROM[variant], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: variant === "staggerIn" ? stagger : 0,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      });
    },
    { scope: ref, dependencies: [prefersReducedMotion] }
  );
}
