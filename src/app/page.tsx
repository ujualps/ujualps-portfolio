import type { Metadata } from 'next';

import { HeroSection } from '@/app/components/hero-section';
import { PhotographySection } from '@/app/components/photography-section';
import { FeaturedSection } from '@/app/components/featured-section';
import { ServicesSection } from '@/app/components/services-section';
import { AboutSection } from '@/app/components/about-section';
import { CTASection } from '@/app/components/cta-section';
import { Footer } from '@/app/components/footer';

export const metadata: Metadata = {
  title: 'Theyyam & Portrait Photography by Ujual P S',
  description:
    'Tales of UJ is the photography portfolio of Ujual P S — capturing the divine energy of Theyyam and the subtle emotions of portrait photography through powerful visual storytelling.',
  keywords: [
    'Tales of UJ',
    'Ujual P S',
    'Theyyam photography',
    'Kerala Theyyam',
    'portrait photography',
    'cultural photography',
    'Indian photographer',
    'documentary photography',
    'Kerala photography portfolio',
  ],
  alternates: {
    canonical: 'https://www.talesofuj.com',
  },
  openGraph: {
    title: 'Tales of UJ | Theyyam & Portrait Photography by Ujual P S',
    description:
      'Explore Tales of UJ — the visual world of Ujual P S, blending art, tradition, and storytelling through Theyyam and portrait photography.',
    url: 'https://www.talesofuj.com',
    images: [
      {
        url: '/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Tales of UJ — Theyyam photography by Ujual P S',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tales of UJ | Photography by Ujual P S',
    description:
      "Discover Tales of UJ — Theyyam and portrait photography by Ujual P S, celebrating Kerala's cultural spirit through the lens.",
    images: ['/preview.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.talesofuj.com/#website',
      url: 'https://www.talesofuj.com',
      name: 'Tales of UJ',
      description:
        'Theyyam & portrait photography by Ujual P S — storytelling through the lens.',
      author: { '@id': 'https://www.talesofuj.com/#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://www.talesofuj.com/#person',
      name: 'Ujual P S',
      url: 'https://www.talesofuj.com',
      email: 'talesofuj@gmail.com',
      jobTitle: 'Photographer & Frontend Engineer',
      description:
        'Photographer specialising in Theyyam and portrait photography, and frontend engineer based in Kerala, India.',
      sameAs: [
        'https://www.instagram.com/talesofuj',
        'https://www.linkedin.com/in/ujualps',
      ],
      knowsAbout: [
        'Theyyam photography',
        'Portrait photography',
        'Documentary photography',
        'Kerala culture',
        'Frontend Engineering',
        'React',
        'Next.js',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'talesofuj@gmail.com',
        contactType: 'customer service',
        availableLanguage: ['English'],
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#0c0905] text-amber-50">
        <HeroSection />
        <PhotographySection />
        <ServicesSection />
        <FeaturedSection />
        <AboutSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
