export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 text-sm text-text-secondary md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} XnorsCode</p>
        <p className="font-mono">We XOR complexity into clarity.</p>
      </div>
    </footer>
  );
}
