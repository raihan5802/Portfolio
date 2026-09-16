import GlitchSectionHeading from "@/components/ui/GlitchSectionHeading";
import SkillsConsole from "./SkillsConsole";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-28 px-6 pb-20 pt-28 sm:scroll-mt-32 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <GlitchSectionHeading
          text="<SkillStack/>"
          ariaLabel="Skill Stack"
        />
        <SkillsConsole />
      </div>
    </section>
  );
}
