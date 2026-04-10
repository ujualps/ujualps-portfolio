'use client';

import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function AboutSection() {
  return (
    <section className="px-6 md:px-12 py-28 bg-[#0c0905]">
      <div className="max-w-4xl mx-auto">
        {/* Section rule */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/60">
            § 03
          </span>
          <div className="flex-1 h-px bg-amber-100/8" />
          <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/40">
            From the Photographer
          </span>
        </motion.div>

        {/* Large editorial quote */}
        <motion.blockquote
          className="font-serif font-light italic text-[clamp(1.7rem,4vw,3.2rem)] text-amber-100 leading-snug mb-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1, ease: EASE }}
        >
          &ldquo;Tales of UJ is a photography brand dedicated to capturing
          authentic moments and telling stories through visual
          narratives.&rdquo;
        </motion.blockquote>

        {/* Body text with drop-cap on first word */}
        <motion.p
          className="text-stone-400 leading-relaxed text-base font-light max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        >
          <span
            className="float-left font-serif font-light text-[4rem] leading-[0.75] text-amber-100/20 mr-3 mt-1 select-none"
            aria-hidden="true"
          >
            E
          </span>
          very frame seeks the stories etched in faces, emotions, and
          experiences — creating a collection of visual tales that reflect the
          human experience in its most genuine form.
        </motion.p>

        {/* Byline */}
        <motion.div
          className="mt-12 flex items-center gap-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
        >
          <div className="h-px w-10 bg-orange-800/40" />
          <div>
            <span className="font-serif italic text-orange-400/80 text-base">
              Ujual P S
            </span>
            <span className="block text-[9px] uppercase tracking-[0.32em] text-stone-500 mt-0.5">
              Photographer · Kerala, India
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
