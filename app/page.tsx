import { ContactSection } from '@/components/contact-section';
import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { ServicesSection } from '@/components/services-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { TeamSection } from '@/components/team-section';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
