import { Button } from '@/components/ui/button';
import { Linkedin, Instagram, Download } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
            Ujual P S
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 mb-8">
            Software Engineer & Photographer
          </p>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a software engineer who loves capturing moments that tell
            stories. My work blends logic and emotion — I code by day, and
            capture light by passion.
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
            <Button
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
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-10 md:p-12">
          <h2 className="text-4xl font-semibold mb-6 text-center">About Me</h2>
          <p className="text-neutral-600 leading-relaxed text-lg text-center">
            Every frame I take reflects the patience and precision that drives
            my craft. Whether I&apos;m writing code or capturing a sunset, I
            approach each project with dedication and an eye for detail.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 text-center bg-neutral-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-neutral-600 mb-8 text-lg">
            Let&apos;s connect and create something beautiful together.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-neutral-900 text-white hover:bg-neutral-800"
          >
            <a href="mailto:ujualps@gmail.com">Contact Me</a>
          </Button>
        </div>
      </section>

      <footer className="text-center text-neutral-500 py-8 text-sm border-t border-neutral-200">
        © {new Date().getFullYear()} Ujual P S
      </footer>
    </main>
  );
}
