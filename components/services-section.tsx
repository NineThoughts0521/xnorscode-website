'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/site-content';
import { SectionShell } from './section-shell';

export function ServicesSection() {
  return (
    <SectionShell id="services" subtitle="Capabilities" title="我们的服务">
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group rounded-2xl border border-neon-blue/20 bg-bg-card p-6 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 leading-relaxed text-text-secondary">{service.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-neon-blue/90">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-neon-blue/70 to-transparent opacity-0 transition group-hover:opacity-100" />
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
