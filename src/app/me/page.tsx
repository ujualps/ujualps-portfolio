import { Separator } from '@/components/ui/separator';
import { HeroSection } from '@/app/me/components/hero-section';
import { PhotographySection } from '@/app/me/components/photography-section';
import { AboutSection } from '@/app/me/components/about-section';
import { ContactSection } from '@/app/me/components/contact-section';
import { Footer } from '@/app/me/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      <HeroSection />

      <Separator className="bg-neutral-200" />

      <PhotographySection />

      <Separator className="bg-neutral-200" />

      <AboutSection />

      <Separator className="bg-neutral-200" />

      <ContactSection />

      <Footer />
    </main>
  );
}
