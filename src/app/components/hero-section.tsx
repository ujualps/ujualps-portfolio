'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Instagram, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TITLE_WORDS = ['Tales', 'of', 'UJ'];

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="https://res.cloudinary.com/dpkeosatq/image/upload/v1762093588/kelan-vellattam-15_ndlnel.jpg"
        alt="Tales of UJ — cover"
        fill
        priority
        className="object-cover object-center"
        style={{ animation: 'cover-drift 20s ease-in-out infinite alternate' }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/65 via-black/15 to-black/80" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black/30 via-transparent to-black/20" />

      {/* Vignette — slow pulse */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.6) 100%)',
          animation: 'vignette-pulse 8s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      {/* Film grain overlay */}
      <div
        className="grain-overlay pointer-events-none absolute inset-0 z-[4]"
        aria-hidden="true"
      />

      {/* Scanline sweep — fires once on load */}
      <div
        className="scanline pointer-events-none absolute left-0 right-0 z-[5]"
        aria-hidden="true"
      />

      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 pt-8">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="h-4 w-px bg-white/40" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
            Photography
          </span>
        </motion.div>

        <motion.span
          className="text-[10px] uppercase tracking-[0.35em] text-white/50"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          Vol. I &nbsp;·&nbsp; 2025
        </motion.span>
      </div>

      {/* ── Centre content ──────────────────────────────────────────── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Issue badge — fades + scales in, border draws */}
        <motion.div
          className="mb-7"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <motion.span
            className="inline-block border px-5 py-1.5 text-[10px] uppercase tracking-[0.45em] text-white/55"
            initial={{ borderColor: 'rgba(255,255,255,0)' }}
            animate={{ borderColor: 'rgba(255,255,255,0.25)' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.55 }}
          >
            Issue No. 01 &nbsp;·&nbsp; Kerala
          </motion.span>
        </motion.div>

        {/* Title — each word slides up individually */}
        <div className="mb-3 flex flex-wrap items-baseline justify-center gap-x-[0.22em]">
          {TITLE_WORDS.map((word, i) => (
            <div key={word} className="overflow-hidden pb-1">
              <motion.span
                className="inline-block text-[clamp(3.5rem,12vw,9rem)] font-extrabold uppercase leading-none tracking-tight text-white"
                initial={{ y: '115%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{
                  duration: 1.05,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.15 + i * 0.09,
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Divider — lines grow outward, text letter-spacing collapses in */}
        <motion.div
          className="mb-8 flex items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.95 }}
        >
          <motion.div
            className="h-px bg-white/35"
            initial={{ width: 0 }}
            animate={{ width: '3.5rem' }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.05,
            }}
          />
          <motion.span
            className="text-[11px] uppercase text-white/60"
            initial={{ opacity: 0, letterSpacing: '0.9em' }}
            animate={{ opacity: 1, letterSpacing: '0.4em' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
          >
            Stories through light
          </motion.span>
          <motion.div
            className="h-px bg-white/35"
            initial={{ width: 0 }}
            animate={{ width: '3.5rem' }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 1.05,
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mb-10 max-w-md font-serif italic text-lg leading-relaxed text-white/55 md:text-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        >
          Photography that seeks the narratives etched in every moment, every
          face, every experience.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.35 }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white/20"
          >
            <Link
              href="https://www.instagram.com/talesofuj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-4" />
              Follow on Instagram
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-8 pb-7">
        <motion.div
          className="flex flex-col gap-0.5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
            Kelan Vellattam · Theyyam
          </span>
          <span className="font-serif italic text-[11px] text-white/20">
            Photo — Ujual P S
          </span>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-1.5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.75 }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
            Scroll
          </span>
          <ChevronDown
            className="size-4 text-white/40"
            style={{ animation: 'scroll-bounce 1.8s ease-in-out infinite' }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-end gap-0.5"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">
            www.talesofuj.com
          </span>
          <span className="font-serif italic text-[11px] text-white/20">
            p. 01
          </span>
        </motion.div>
      </div>
    </section>
  );
}
