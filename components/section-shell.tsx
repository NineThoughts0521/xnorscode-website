import { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function SectionShell({ id, title, subtitle, children }: SectionShellProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-10 space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-neon-blue/80">{subtitle}</p>
        <h2 className="text-3xl font-semibold text-text-primary md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
