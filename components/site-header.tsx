export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg-secondary/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm text-white">
          XnorsCode
        </a>
        <nav className="hidden gap-6 text-sm text-text-secondary md:flex">
          <a href="#services" className="hover:text-neon-blue">服务</a>
          <a href="#team" className="hover:text-neon-blue">团队</a>
          <a href="#projects" className="hover:text-neon-blue">项目</a>
          <a href="#contact" className="hover:text-neon-blue">联系</a>
        </nav>
      </div>
    </header>
  );
}
