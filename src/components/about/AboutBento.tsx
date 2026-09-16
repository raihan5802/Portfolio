import Image from "next/image";
import { GraduationCap, Mail, MapPin } from "lucide-react";
import {
  aboutContact,
  aboutSummary,
  coreAreas,
  educationHistory,
} from "./about-data";
import GlitchSectionHeading from "@/components/ui/GlitchSectionHeading";

const contactIcons = {
  mail: Mail,
  location: MapPin,
  education: GraduationCap,
} as const;

export default function AboutBento() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-6 pb-20 pt-28 sm:scroll-mt-32 sm:pt-32"
    >
      <div className="mx-auto max-w-6xl">
        <GlitchSectionHeading text="<DevProfile />" ariaLabel="Dev Profile" />

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1.05fr)] lg:gap-10">
          {/* Left — profile & core areas */}
          <article className="about-card rounded-2xl border border-white/10 bg-[#111827]/80 p-6 backdrop-blur-sm sm:p-8 lg:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-7">
              <div className="relative mx-auto h-48 w-40 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-[#0a1628] shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:mx-0 sm:h-52 sm:w-44 lg:h-56 lg:w-48">
                <Image
                  src="/profile.png"
                  alt="MD Raihan Chowdhury"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 176px, 192px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <p className="min-w-0 flex-1 text-sm leading-relaxed text-[#DCDFD2] sm:text-base">
                {aboutSummary}
              </p>
            </div>

            <ul className="mt-8 space-y-5">
              {aboutContact.map((item) => {
                const Icon = contactIcons[item.icon];
                const content = (
                  <>
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#0080B0]" />
                    <div>
                      <p className="text-sm font-semibold text-[#DCDFD2]">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm text-[#94A3B8]">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex cursor-pointer gap-3 transition-colors duration-200 hover:text-[#0080B0]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <h2 className="text-base font-semibold text-[#DCDFD2]">
                Core Areas
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {coreAreas.map((area) => (
                  <li key={area}>
                    <span className="inline-block rounded-full border border-[#0080B0]/50 bg-[#0080B0]/10 px-3 py-1.5 text-xs font-medium text-[#0080B0] sm:text-sm">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Right — education stack */}
          <div className="w-full lg:max-w-[520px] lg:justify-self-start">
            <h2 className="mb-4 text-xl font-bold text-[#DCDFD2]">
              Education
            </h2>
            <div className="space-y-4">
              {educationHistory.map((entry) => (
                <article
                  key={entry.degree}
                  className="about-edu-card group cursor-default rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-sm transition-all duration-200 hover:border-[#0080B0]/70 hover:shadow-[0_0_24px_rgba(0,128,176,0.15)] sm:p-6"
                >
                  <h3 className="text-base font-bold leading-snug text-[#DCDFD2] sm:text-lg lg:whitespace-nowrap">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#0080B0] sm:text-base">
                    {entry.institution}
                  </p>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <p className="text-xs text-[#94A3B8] sm:text-sm">
                      {entry.timeline}
                    </p>
                    <p className="text-xs text-[#94A3B8] sm:text-sm">
                      {entry.result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
