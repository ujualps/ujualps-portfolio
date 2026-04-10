import Head from 'next/head';

import { HeroSection } from '@/app/components/hero-section';
import { PhotographySection } from '@/app/components/photography-section';
import { FeaturedSection } from '@/app/components/featured-section';
import { ServicesSection } from '@/app/components/services-section';
import { AboutSection } from '@/app/components/about-section';
import { CTASection } from '@/app/components/cta-section';
import { Footer } from '@/app/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tales of UJ | Theyyam & Portrait Photography by Ujual P S</title>

        <meta
          name="description"
          content="Tales of UJ is the photography portfolio of Ujual P S — capturing the divine energy of Theyyam and the subtle emotions of portrait photography through powerful visual storytelling."
        />

        <meta
          name="keywords"
          content="Tales of UJ, Ujual P S, Theyyam photography, Kerala Theyyam, portrait photography, cultural photography, Indian photographer, documentary photography, Kerala photography portfolio"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ujual P S" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tales of UJ | Theyyam & Portrait Photography by Ujual P S"
        />
        <meta
          property="og:description"
          content="Explore Tales of UJ — the visual world of Ujual P S, blending art, tradition, and storytelling through Theyyam and portrait photography."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://www.talesofuj.com" />
        <meta property="og:site_name" content="Tales of UJ" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tales of UJ | Photography by Ujual P S"
        />
        <meta
          name="twitter:description"
          content="Discover Tales of UJ — Theyyam and portrait photography by Ujual P S, celebrating Kerala's cultural spirit through the lens."
        />
        <meta name="twitter:image" content="/preview.jpg" />
      </Head>

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
