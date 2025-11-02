'use client';

import Image from 'next/image';
import { TALES_OF_UJ_IMAGES } from '@/lib/constants';

export function PhotographySection() {
  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...TALES_OF_UJ_IMAGES, ...TALES_OF_UJ_IMAGES];

  return (
    <section id="photography" className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-center">
          My Photography
        </h2>
        <p className="text-lg text-neutral-600 mb-12 text-center max-w-2xl mx-auto leading-relaxed">
          Searching for the stories etched in every face, capturing emotions and
          experiences.
        </p>
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="flex animate-scroll-horizontal gap-6">
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
      </div>
    </section>
  );
}
