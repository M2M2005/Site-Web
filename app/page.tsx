import { DemoBackgroundPaths } from "@/components/demo-background-paths";
import { AboutSection } from "@/components/sections/about-section";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="w-full">
        <DemoBackgroundPaths />
        <AboutSection />
        <ExperiencesSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
