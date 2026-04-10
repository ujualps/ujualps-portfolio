import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { HeroSection } from '@/app/me/components/hero-section';
import { PhotographySection } from '@/app/components/photography-section';
import { AboutSection } from '@/app/me/components/about-section';
import { ContactSection } from '@/app/me/components/contact-section';
import { Footer } from '@/app/me/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Portfolio | Photographer & Frontend Engineer',
  description:
    'View the portfolio of Ujual P S — creator of Tales of UJ. Explore photography projects featuring Theyyam, portraits, and visual stories, alongside interactive web experiences built with React and Next.js.',
  keywords: [
    'Ujual P S',
    'Tales of UJ',
    'portfolio',
    'photographer',
    'frontend engineer',
    'Kerala photographer',
    'Theyyam photography',
    'portrait photography',
    'Next.js developer',
    'React developer',
    'hire photographer Kerala',
    'freelance web developer',
  ],
  alternates: {
    canonical: 'https://www.talesofuj.com/me',
  },
  openGraph: {
    title: 'Ujual P S | Portfolio | Photographer & Frontend Engineer',
    description:
      'Explore the creative portfolio of Ujual P S — blending storytelling through Tales of UJ photography and modern frontend engineering. Reach out for photography projects or web collaborations.',
    url: 'https://www.talesofuj.com/me',
    images: [
      {
        url: '/portfolio-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio of Ujual P S — photographer and frontend engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ujual P S | Photographer & Frontend Engineer',
    description:
      'Discover photography and web development projects by Ujual P S — creator of Tales of UJ. Available for freelance and collaboration work.',
    images: ['/portfolio-preview.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://www.talesofuj.com/#person',
    name: 'Ujual P S',
    url: 'https://www.talesofuj.com',
    email: 'talesofuj@gmail.com',
    jobTitle: 'Photographer & Frontend Engineer',
    description:
      'Photographer specialising in Theyyam and portrait photography, and frontend engineer available for freelance work in photography and web development.',
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
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
        <div className="container mx-auto px-6 pt-8">
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="transition-all duration-300 text-lg"
          >
            <Link href="/">
              <ChevronLeft className="mr-2 size-6" />
              Home
            </Link>
          </Button>
        </div>

        <HeroSection />

        <Separator className="bg-neutral-200" />

        <PhotographySection />

        <Separator className="bg-neutral-200" />

        <AboutSection />

        <Separator className="bg-neutral-200" />

        <ContactSection />

        <Footer />
      </main>
    </>
  );
}
