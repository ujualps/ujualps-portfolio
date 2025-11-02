import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Instagram, Download } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen px-6">
      <div className="max-w-3xl space-y-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
          Ujual P S
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <Badge variant="outline" className="text-base px-4 py-1.5">
            Software Engineer
          </Badge>
          <Badge variant="outline" className="text-base px-4 py-1.5">
            Photographer
          </Badge>
        </div>
        <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
          I&apos;m a software engineer who loves capturing moments that tell
          stories. My work blends logic and emotion — I code by day, and capture
          light by passion.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <Button
            asChild
            variant="default"
            size="lg"
            className="bg-neutral-900 text-white hover:bg-neutral-800"
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
            className="border-neutral-300 hover:bg-neutral-100"
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
