'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(36,213,255,0.2),transparent_30%),radial-gradient(circle_at_80%_35%,rgba(139,92,255,0.2),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(140,170,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(140,170,255,0.25)_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-12 px-6 py-24 md:flex-row md:items-center md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-neon-blue/90">XnorsCode · System-Level Studio</p>
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            XOR THE <span className="bg-neon-gradient bg-clip-text text-transparent">FUTURE</span>
          </h1>
          <p className="max-w-xl text-lg text-text-secondary md:text-xl">
            我们以系统级工程与 AI 能力，构建下一代数字产品。
          </p>
          <p className="font-mono text-sm text-neon-mint">Code with precision. Build beyond boundaries.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full border border-neon-blue/60 bg-neon-blue/10 px-6 py-3 text-sm font-medium text-neon-blue shadow-glow transition hover:-translate-y-0.5 hover:bg-neon-blue/20"
            >
              探索项目
            </a>
            <a
              href="#contact"
              className="rounded-full border border-neon-purple/60 bg-neon-purple/10 px-6 py-3 text-sm font-medium text-white shadow-glow-purple transition hover:-translate-y-0.5 hover:bg-neon-purple/20"
            >
              开启合作
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto h-72 w-72 rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl md:h-96 md:w-96"
        >
          <div className="absolute inset-5 animate-pulse rounded-2xl border border-neon-blue/40" />
          <div className="absolute inset-10 rounded-2xl border border-neon-purple/40" />
          <div className="absolute inset-0 grid place-content-center text-center">
            <p className="font-mono text-xs tracking-[0.25em] text-text-secondary">CORE NODE</p>
            <p className="mt-3 text-4xl font-semibold text-white">XOR</p>
            <p className="mt-2 font-mono text-sm text-neon-blue">01011001</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
