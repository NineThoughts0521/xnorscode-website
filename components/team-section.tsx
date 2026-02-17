'use client';

import { motion } from 'framer-motion';
import { teamMembers } from '@/data/site-content';
import { SectionShell } from './section-shell';

export function TeamSection() {
  return (
    <SectionShell id="team" subtitle="People" title="我们的团队">
      <div className="mb-8 max-w-3xl">
        <p className="text-2xl font-semibold text-white md:text-3xl">Engineers of the Unseen</p>
        <p className="mt-3 text-text-secondary">
          我们不是追逐潮流，而是定义技术被使用的方式。由系统工程师、AI 工程师与创意开发者组成，追求性能与体验并存。
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
          >
            <div className="mb-4 h-16 w-16 rounded-2xl border border-neon-purple/50 bg-neon-purple/10" />
            <p className="text-lg font-medium text-white">{member.name}</p>
            <p className="text-sm text-neon-blue">{member.role}</p>
            <div className="mt-4 space-y-1">
              {member.skills.map((skill) => (
                <p key={skill} className="font-mono text-xs text-text-secondary">
                  {skill}
                </p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
