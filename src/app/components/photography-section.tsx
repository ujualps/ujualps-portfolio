'use client';

import Image from 'next/image';
import { TALES_OF_UJ_IMAGES } from '@/lib/constants';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function PhotographySection() {
  const duplicatedImages = [
    ...TALES_OF_UJ_IMAGES,
    ...TALES_OF_UJ_IMAGES,
    ...TALES_OF_UJ_IMAGES,
    ...TALES_OF_UJ_IMAGES,
  ];
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const imageContainer = imageContainerRef.current;
    if (!scrollContainer || !imageContainer) return;

    const imageWidth = 280;
    const gap = 24;
    const imageSetWidth = TALES_OF_UJ_IMAGES.length * (imageWidth + gap);
    const halfPoint = imageSetWidth;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      if (scrollLeft >= imageSetWidth * 2) {
        scrollContainer.scrollLeft = halfPoint;
      }
      if (scrollLeft <= 0 && scrollLeft < -100) {
        scrollContainer.scrollLeft = halfPoint;
      }
    };

    scrollContainer.scrollLeft = halfPoint;
    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-[#0c0905] overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-12 mb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Section rule + label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/60">
            § 01
          </span>
          <div className="flex-1 h-px bg-amber-100/8" />
          <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/40">
            The Work
          </span>
        </div>

        <div className="flex items-end justify-between gap-8">
          <div className="flex-1">
            <h2 className="font-serif font-light text-[clamp(3rem,8vw,6rem)] text-amber-50 leading-none tracking-tight mb-5">
              Photography
            </h2>
            <p className="font-serif italic text-stone-400 text-lg leading-relaxed max-w-xs">
              Searching for stories etched in every face — capturing emotions
              and experiences across Kerala.
            </p>
          </div>
          <span
            className="hidden md:block flex-shrink-0 font-serif font-light leading-none select-none text-amber-50/[0.04]"
            style={{ fontSize: 'clamp(6rem,15vw,12rem)' }}
            aria-hidden="true"
          >
            01
          </span>
        </div>
      </motion.div>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide w-full"
      >
        <div
          ref={imageContainerRef}
          className="flex animate-scroll-horizontal gap-6 w-max"
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="relative group flex-shrink-0 w-[280px] aspect-[3/4] overflow-hidden rounded-xl bg-[#1c1409]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="font-serif italic text-amber-100 text-sm leading-snug translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
