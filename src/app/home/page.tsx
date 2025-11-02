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
  );
}
