'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/site-content';
import { SectionShell } from './section-shell';

export function ProjectsSection() {
  return (
    <SectionShell id="projects" subtitle="Case Studies" title="我们的项目">
      <div className="space-y-5">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-neon-purple/25 bg-gradient-to-br from-bg-card to-[#0f1630]/60 p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
              <span className="rounded-full border border-neon-blue/35 px-3 py-1 text-xs text-neon-blue">{project.industry}</span>
            </div>
            <p className="mt-3 text-text-secondary">{project.challenge}</p>
            <p className="mt-4 text-sm text-neon-mint">{project.result}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-md border border-white/20 px-2 py-1 font-mono text-xs text-text-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
