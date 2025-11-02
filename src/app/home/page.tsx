import Head from 'next/head';

import { Separator } from '@/components/ui/separator';
import { HeroSection } from '@/app/home/components/hero-section';
import { PhotographySection } from '@/app/home/components/photography-section';
import { FeaturedSection } from '@/app/home/components/featured-section';
import { ServicesSection } from '@/app/home/components/services-section';
import { AboutSection } from '@/app/home/components/about-section';
import { CTASection } from '@/app/home/components/cta-section';
import { Footer } from '@/app/home/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ujual P S | Photographer & Frontend Engineer</title>
        <meta
          name="description"
          content="Portfolio of Ujual P S — a frontend engineer and photographer combining code and creativity."
        />
        <meta
          name="keywords"
          content="Ujual P S, Photographer, Frontend Engineer, Next.js, React"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Ujual P S | Photographer & Frontend Engineer"
        />
        <meta
          property="og:description"
          content="Explore my photography and web development projects — crafted with precision and creativity."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://yourapp.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
        <HeroSection />

        <Separator className="bg-neutral-200" />

        <PhotographySection />

        <Separator className="bg-neutral-200" />

        <ServicesSection />

        <Separator className="bg-neutral-200" />

        <FeaturedSection />

        <Separator className="bg-neutral-200" />

        <AboutSection />

        <Separator className="bg-neutral-200" />

        <CTASection />

        <Footer />
      </main>
    </>
  );
}
