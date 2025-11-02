'use client';

import Image from 'next/image';
import { TALES_OF_UJ_IMAGES } from '@/lib/constants';
import { useEffect, useRef } from 'react';

export function PhotographySection() {
  // Duplicate images multiple times for seamless infinite scroll
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
    const gap = 24; // 6 * 4px = 24px
    const imageSetWidth = TALES_OF_UJ_IMAGES.length * (imageWidth + gap);
    const halfPoint = imageSetWidth;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;

      // If scrolled past the second set, loop back to the beginning
      if (scrollLeft >= imageSetWidth * 2) {
        scrollContainer.scrollLeft = halfPoint;
      }
      // If scrolled before the first set, loop to the end
      if (scrollLeft <= 0 && scrollLeft < -100) {
        scrollContainer.scrollLeft = halfPoint;
      }
    };

    // Initialize scroll position to the middle
    scrollContainer.scrollLeft = halfPoint;

    scrollContainer.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-semibold mb-4 text-center">Photography</h2>
        <p className="text-lg text-neutral-600 mb-4 text-center max-w-2xl mx-auto leading-relaxed">
          Searching for the stories etched in every face, capturing emotions and
          experiences.
        </p>
      </div>
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
              className="relative group flex-shrink-0 w-[280px] aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition duration-500"
                sizes="280px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
