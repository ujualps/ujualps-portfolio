import { Button } from '@/components/ui/button';
import { Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="relative px-6 py-24 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.3))]" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-neutral-100 to-white bg-clip-text text-transparent">
            Ready to Tell Your Story?
          </h2>
          <p className="text-lg md:text-xl text-neutral-200 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Let&apos;s collaborate to capture the moments that matter. Whether
            it&apos;s a portrait session, event documentation, or a creative
            project, Tales of UJ is here to bring your vision to life through
            photography.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-neutral-900 hover:border-white px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/5"
          >
            <Link
              href="https://www.instagram.com/talesofuj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-5 mr-2" />
              Follow on Instagram
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-100 px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Link href="/me">
              View Portfolio
              <ArrowRight className="size-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
