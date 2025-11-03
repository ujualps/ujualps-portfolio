'use client';

import Image from 'next/image';
import { TALES_OF_UJ_FEATURED_IMAGES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FeaturedSection() {
  // Get first 6 images as featured (show 3 on mobile, 6 on desktop)
  const featuredImages = TALES_OF_UJ_FEATURED_IMAGES.slice(0, 6);
  const mobileImages = TALES_OF_UJ_FEATURED_IMAGES.slice(0, 3);

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Featured Work</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A curated selection of visual stories that showcase the essence of
            Tales of UJ
          </p>
        </div>
        {/* Mobile view - 3 images */}
        <div className="grid grid-cols-1 gap-6 mb-10 sm:hidden">
          {mobileImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl aspect-[3/4] bg-neutral-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition duration-500"
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        {/* Desktop view - 6 images */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl aspect-[3/4] bg-neutral-100"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transform group-hover:scale-105 transition duration-500"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 px-8"
          >
            <Link href="/me">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
