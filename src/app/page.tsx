import AboutBento from "@/components/about/AboutBento";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import Hero from "@/components/home/Hero";
import SkillsSection from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutBento />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
