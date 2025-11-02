import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Instagram } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen px-6 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)]" />

      <div className="max-w-4xl space-y-8 relative z-10">
        <div className="mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_0.1s_forwards]">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 bg-clip-text text-transparent leading-none drop-shadow-sm">
            Ujual P S
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
          <Badge
            variant="outline"
            className="text-base px-5 py-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-sm hover:shadow-md hover:scale-105"
          >
            Software Engineer
          </Badge>
          <Badge
            variant="outline"
            className="text-base px-5 py-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-sm hover:shadow-md hover:scale-105"
          >
            Photographer
          </Badge>
        </div>

        <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
          Stories told through code and captured through light. Where software
          engineering meets visual storytelling.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.7s_forwards]">
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-neutral-900 text-white hover:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8"
          >
            <Link
              href="https://www.linkedin.com/in/ujualps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-5" />
              LinkedIn
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 px-8"
          >
            <Link
              href="https://www.instagram.com/talesofuj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="size-5" />
              Instagram
            </Link>
          </Button>
          {/* <Button
            asChild
            variant="outline"
            size="lg"
            className="border-neutral-300 hover:bg-neutral-100"
          >
            <a
              href="https://drive.google.com/file/d/1P8DHGjEQiT0JzVJ0C33GiLZDnnXqPpwG/view?usp=sharing"
              download
            >
              <Download className="size-5" />
              Download Resume
            </a>
          </Button> */}
        </div>
      </div>
    </section>
  );
}
