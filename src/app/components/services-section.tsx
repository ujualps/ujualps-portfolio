'use client';

import { motion, type Variants } from 'framer-motion';

const services = [
  {
    title: 'Portrait Photography',
    description:
      'Capturing authentic expressions and personalities in intimate portrait sessions. Every sitting becomes a conversation — a quiet exchange between subject and lens.',
  },
  {
    title: 'Emotional Storytelling',
    description:
      'Photography that seeks the narratives etched in faces and lived experiences. Moments documented not as records, but as visual literature.',
  },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export function ServicesSection() {
  return (
    <section className="px-6 md:px-12 py-24 bg-[#0f0c08]">
      <div className="max-w-6xl mx-auto">
        {/* Section opener */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/60">
              § 02
            </span>
            <div className="flex-1 h-px bg-amber-100/8" />
            <span className="text-[9px] uppercase tracking-[0.38em] text-orange-400/40">
              Disciplines
            </span>
          </div>

          <h2 className="font-serif font-light text-[clamp(2.8rem,7vw,5.5rem)] text-amber-50 leading-none tracking-tight mb-4">
            The Craft
          </h2>
          <p className="font-serif italic text-stone-400 text-xl">
            Specialized disciplines tailored to your story.
          </p>
        </motion.div>

        {/* Two services as editorial columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`py-10 ${i === 0 ? 'md:pr-14 md:border-r md:border-amber-100/8' : 'md:pl-14'} ${i < services.length - 1 ? 'border-b border-amber-100/8 md:border-b-0' : ''}`}
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-orange-400/40 mb-5 block font-mono">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif font-light text-3xl md:text-4xl text-amber-100 leading-tight mb-5">
                {service.title}
              </h3>
              <div className="h-px w-8 bg-orange-800/40 mb-5" />
              <p className="text-stone-400 leading-relaxed text-sm font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
