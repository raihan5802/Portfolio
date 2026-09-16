import type { ReactNode } from "react";
import { Award, ExternalLink } from "lucide-react";
import { certifications, mlAiSkills } from "./skills-data";

function DockPill({ name, accent }: { name: string; accent?: string }) {
  return (
    <span
      className="skills-dock-pill shrink-0 rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[10px] font-medium leading-none text-[#DCDFD2] sm:px-2.5 sm:py-1.5 sm:text-[11px]"
      style={
        accent
          ? { boxShadow: `inset 0 0 0 1px ${accent}33` }
          : undefined
      }
    >
      {name}
    </span>
  );
}

function DockSubheading({ children }: { children: ReactNode }) {
  return (
    <p className="mb-2 font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-widest text-[#94A3B8] sm:text-xs">
      {children}
    </p>
  );
}

export default function SkillsDock() {
  return (
    <div className="skills-dock border-t border-white/10 bg-[#0a1628]/90 px-4 py-3 sm:px-6 sm:py-4">
      <p className="mb-3 font-[family-name:var(--font-geist-mono)] text-xs font-semibold uppercase tracking-widest text-[#94A3B8]">
        ML / AI &amp; Credentials Dock
      </p>

      <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-0">
        <div className="min-w-0 flex-1 overflow-hidden md:pr-5">
          <DockSubheading>ML / AI</DockSubheading>
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {mlAiSkills.map((skill) => (
              <DockPill
                key={skill.name}
                name={skill.name}
                accent={skill.accent}
              />
            ))}
          </div>
        </div>

        <div
          className="skills-dock-partition shrink-0 bg-white/15 md:mx-5 md:w-px md:self-stretch"
          aria-hidden="true"
        />

        <div className="min-w-0 flex-1 overflow-hidden md:pl-5">
          <DockSubheading>Certificates</DockSubheading>
          <div className="flex flex-nowrap items-stretch gap-2">
            {certifications.map((cert) => (
              <a
                key={cert.href}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="skills-cert-badge group flex min-w-0 flex-1 cursor-pointer items-center gap-2 rounded-lg border border-[#0080B0]/35 bg-[#0080B0]/10 px-2 py-1.5 transition-colors duration-200 hover:border-[#0080B0]/60 hover:bg-[#0080B0]/20 sm:gap-2.5 sm:rounded-xl sm:px-2.5 sm:py-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#0080B0]/20 text-[#0080B0] sm:h-8 sm:w-8 sm:rounded-lg">
                  <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[10px] font-semibold leading-tight text-[#DCDFD2] group-hover:text-white sm:text-[11px]">
                    {cert.title}
                  </span>
                  <span className="font-[family-name:var(--font-geist-mono)] text-[9px] text-[#0080B0] sm:text-[10px]">
                    {cert.score}
                  </span>
                </span>
                <ExternalLink className="hidden h-3 w-3 shrink-0 text-[#94A3B8] opacity-0 transition-opacity group-hover:opacity-100 sm:block" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
