'use client';

import { motion } from 'framer-motion';
import { SectionShell } from './section-shell';

export function ContactSection() {
  return (
    <SectionShell id="contact" subtitle="Collaboration" title="联系我们">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-3xl font-semibold text-white">Let&apos;s Build the Next XOR.</h3>
          <p className="text-text-secondary">告诉我们你的野心，我们会给出系统级的实现路径。</p>
          <p className="text-sm text-neon-blue">48 小时内回复，7 天内提供初步技术方案。</p>
          <div className="flex gap-3 pt-4 text-sm text-text-secondary">
            <span>GitHub</span>
            <span>X</span>
            <span>LinkedIn</span>
            <span>Email</span>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 rounded-2xl border border-neon-blue/25 bg-bg-card p-6 backdrop-blur-xl"
        >
          {['姓名', '邮箱', '需求类型', '预算区间'].map((label) => (
            <label key={label} className="block text-sm text-text-secondary">
              {label}
              <input
                type="text"
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none transition focus:border-neon-blue"
              />
            </label>
          ))}
          <label className="block text-sm text-text-secondary">
            项目描述
            <textarea className="mt-2 h-28 w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white outline-none transition focus:border-neon-purple" />
          </label>
          <button
            type="button"
            className="w-full rounded-full bg-neon-gradient px-4 py-3 text-sm font-semibold text-[#040712] shadow-glow transition hover:-translate-y-0.5"
          >
            发送需求
          </button>
        </motion.form>
      </div>
    </SectionShell>
  );
}
