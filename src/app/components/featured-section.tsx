'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { TALES_OF_UJ_FEATURED_IMAGES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const IMAGES = TALES_OF_UJ_FEATURED_IMAGES;

export function FeaturedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [travelX, setTravelX] = useState(0);

  useEffect(() => {
    function measure() {
      if (!stripRef.current) return;
      const stripW = stripRef.current.scrollWidth;
      const vw = window.innerWidth;
      setTravelX(Math.max(0, stripW - vw));
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -travelX]);
  const sectionHeight = travelX > 0 ? `calc(100vh + ${travelX}px)` : '500vh';

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0c0905]"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0c0905]">
        <motion.div
          ref={stripRef}
          className="absolute top-0 left-0 h-full flex items-center will-change-transform"
          style={{ x }}
        >
          {/* ── Heading panel ── */}
          <div
            className="shrink-0 h-full flex flex-col justify-center pl-8 sm:pl-14 md:pl-24 pr-8 md:pr-14"
            style={{ minWidth: 'clamp(240px, 36vw, 420px)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/60">
                § 04
              </span>
              <div className="h-px w-8 bg-amber-100/8" />
              <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/40">
                Selected Works
              </span>
            </div>
            <h2 className="font-serif font-light text-[clamp(3rem,6vw,5.5rem)] text-amber-50 leading-none tracking-tight">
              Featured
              <br />
              <span className="italic">Work</span>
            </h2>
            <p className="font-serif italic text-xs text-stone-500 mt-5 leading-relaxed max-w-[190px]">
              A curated selection of visual stories by Tales of UJ
            </p>
            <div className="mt-9 flex items-center gap-3">
              <div className="w-5 h-px bg-orange-800/50" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-orange-400/40">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* ── Images ── */}
          {IMAGES.map((image, i) => (
            <div
              key={image.id}
              className="relative shrink-0 rounded-2xl overflow-hidden group"
              style={{
                height: '72vh',
                aspectRatio: '3 / 4',
                marginRight: '18px',
                boxShadow: '0 16px 48px -8px rgba(0,0,0,0.6)',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 60vw, 380px"
                priority={i < 2}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/70 via-black/10 to-transparent pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                <span className="text-orange-300/40 text-[9px] tracking-[0.28em] uppercase block mb-1.5 font-mono">
                  Plate {String(i + 1).padStart(2, '0')}&thinsp;·&thinsp;
                  {String(IMAGES.length).padStart(2, '0')}
                </span>
                <span className="font-serif italic text-amber-100/90 text-sm leading-snug block">
                  {image.alt}
                </span>
              </div>

              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-orange-500/0 group-hover:ring-orange-500/20 transition-all duration-500 pointer-events-none" />
            </div>
          ))}

          {/* ── CTA panel ── */}
          <div
            className="shrink-0 h-full flex flex-col justify-center pl-10 md:pl-16 pr-10 md:pr-24"
            style={{ minWidth: 'clamp(200px, 26vw, 360px)' }}
          >
            <p className="text-stone-500 text-xs font-light mb-8 leading-relaxed max-w-[180px]">
              Discover the full collection of visual stories.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-400 px-8 py-5 text-xs tracking-[0.18em] uppercase font-medium rounded-full w-fit transition-all duration-300 hover:scale-[1.04] shadow-[0_0_24px_rgba(249,115,22,0.25)]"
            >
              <Link href="/me">View Portfolio</Link>
            </Button>
          </div>
        </motion.div>

        {/* ── Progress bar ── */}
        <div className="absolute bottom-7 left-8 right-8 z-10">
          <div className="relative h-px bg-orange-950/60 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-orange-500 rounded-full"
              style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
