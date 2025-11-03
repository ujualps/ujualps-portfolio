import { Separator } from '@/components/ui/separator';
import { HeroSection } from '@/app/me/components/hero-section';
import { PhotographySection } from '@/app/components/photography-section';
import { AboutSection } from '@/app/me/components/about-section';
import { ContactSection } from '@/app/me/components/contact-section';
import { Footer } from '@/app/me/components/footer';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ujual P S | Portfolio | Photographer & Frontend Engineer</title>

        <meta
          name="description"
          content="View the portfolio of Ujual P S — creator of Tales of UJ. Explore photography projects featuring Theyyam, portraits, and visual stories, alongside interactive web experiences built with React and Next.js. Get in touch for collaborations or freelance work in photography or web development."
        />

        <meta
          name="keywords"
          content="Ujual P S, Tales of UJ, portfolio, photographer, frontend engineer, Kerala photographer, Theyyam photography, portrait photography, Next.js developer, React developer, hire photographer Kerala, freelance web developer"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ujual P S" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ujual P S | Portfolio | Photographer & Frontend Engineer"
        />
        <meta
          property="og:description"
          content="Explore the creative portfolio of Ujual P S — blending storytelling through Tales of UJ photography and modern frontend engineering. Reach out for photography projects or web collaborations."
        />
        <meta property="og:image" content="/portfolio-preview.jpg" />
        <meta property="og:url" content="https://www.talesofuj.com/me" />
        <meta property="og:site_name" content="Tales of UJ" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ujual P S | Photographer & Frontend Engineer"
        />
        <meta
          name="twitter:description"
          content="Discover photography and web development projects by Ujual P S — creator of Tales of UJ. Available for freelance and collaboration work."
        />
        <meta name="twitter:image" content="/portfolio-preview.jpg" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
        <div className="container mx-auto px-6 pt-8">
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="transition-all duration-300 text-lg"
          >
            <Link href="/home">
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
