'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function CTASection() {
  return (
    <section className="relative px-6 md:px-12 py-28 bg-[#080604] text-white overflow-hidden">
      {/* Subtle ambient warmth — toned way down from fire orbs */}
      <div
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          opacity: 0.06,
          background:
            'radial-gradient(circle, rgba(249,115,22,1) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section rule */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/60">
            § 05
          </span>
          <div className="flex-1 h-px bg-amber-100/8" />
          <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/40">
            Let&apos;s Work Together
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: EASE }}
        >
          {/* Large editorial headline */}
          <h2 className="font-serif font-light text-[clamp(3rem,8vw,7rem)] text-amber-50 leading-none tracking-tight mb-3">
            Commission
          </h2>
          <h2 className="font-serif font-light italic text-[clamp(3rem,8vw,7rem)] text-orange-300/80 leading-none tracking-tight mb-12">
            a Story.
          </h2>

          {/* Body in two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 max-w-3xl">
            <p className="text-stone-400 leading-relaxed font-light">
              Whether it&apos;s a portrait session, event documentation, or a
              creative project — let&apos;s collaborate to capture the moments
              that matter.
            </p>
            <p className="font-serif italic text-stone-500 leading-relaxed text-lg">
              &ldquo;Tales of UJ is here to bring your vision to life, one frame
              at a time.&rdquo;
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border border-amber-100/15 text-amber-50/70 hover:bg-amber-50/5 hover:text-amber-50 hover:border-amber-100/25 px-8 py-6 transition-all duration-300 bg-transparent backdrop-blur-sm text-sm tracking-[0.08em]"
            >
              <Link
                href="https://www.instagram.com/talesofuj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="size-4 mr-2" />
                Follow on Instagram
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-amber-50 text-neutral-900 hover:bg-amber-100 px-8 py-6 transition-all duration-300 hover:scale-[1.03] font-medium text-sm tracking-[0.08em]"
            >
              <Link href="/me">
                View Portfolio
                <ArrowRight className="size-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
