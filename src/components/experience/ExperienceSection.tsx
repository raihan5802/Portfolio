import GlitchSectionHeading from "@/components/ui/GlitchSectionHeading";
import ExperienceTimeline from "./ExperienceTimeline";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-28 px-6 pb-20 pt-28 sm:scroll-mt-32 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <GlitchSectionHeading
          text="<Experience Log/>"
          ariaLabel="Experience Log"
        />
        <ExperienceTimeline />
      </div>
    </section>
  );
}
