import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Linkedin, Instagram, Mail, Briefcase, Camera } from 'lucide-react';
import Link from 'next/link';

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Whether you&apos;re looking for a software engineer to bring your
            ideas to life, a photographer to capture your special moments, or
            someone who can do both — Tales of UJ is here to help bring your
            vision to life.
          </p>
          <p className="text-neutral-500 mb-8">
            Let&apos;s connect and create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Card className="border-neutral-200 gap-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-0">
                <div className="p-2 bg-neutral-100 rounded-lg">
                  <Briefcase className="size-5 text-neutral-700" />
                </div>
                <CardTitle className="text-xl">Software Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600 leading-relaxed">
                Looking for a developer to build your web application, mobile
                app, or digital solution? Let&apos;s discuss how we can bring
                your vision to life.
              </p>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 gap-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-0">
                <div className="p-2 bg-neutral-100 rounded-lg">
                  <Camera className="size-5 text-neutral-700" />
                </div>
                <CardTitle className="text-xl">Photography Services</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600 leading-relaxed">
                Need a photographer for portraits, events, or creative projects?
                I specialize in capturing authentic moments and telling visual
                stories.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="bg-neutral-900 text-white hover:bg-neutral-800 w-full sm:w-auto"
          >
            <a href="mailto:talesofuj@gmail.com">
              <Mail className="size-5 mr-2" />
              Send an Email
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-neutral-300 hover:bg-neutral-100 w-full sm:w-auto"
          >
            <Link
              href="https://www.linkedin.com/in/ujualps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="size-5 mr-2" />
              Connect on LinkedIn
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-neutral-300 hover:bg-neutral-100 w-full sm:w-auto"
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
        </div>

        <div className="text-center">
          <p className="text-sm text-neutral-500">
            Typically respond within 24-48 hours
          </p>
        </div>
      </div>
    </section>
  );
}
