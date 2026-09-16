import GlitchSectionHeading from "@/components/ui/GlitchSectionHeading";
import ProjectCard from "./ProjectCard";
import { projectEntries } from "./projects-data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-6 pb-20 pt-28 sm:scroll-mt-32 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <GlitchSectionHeading
          text="<Projects Executed/>"
          ariaLabel="Projects Executed"
        />

        <div className="mt-12 space-y-10 md:space-y-14">
          {projectEntries.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
