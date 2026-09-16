import { ExternalLink } from "lucide-react";
import { experienceEntries } from "./experience-data";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto mt-12 max-w-5xl pb-8">
      <div
        className="timeline-spine absolute bottom-0 left-4 top-0 w-px md:left-1/2 md:-translate-x-px"
        aria-hidden="true"
      />

      <ol className="space-y-10 md:space-y-14">
        {experienceEntries.map((entry) => (
          <li
            key={entry.id}
            className={`relative flex md:min-h-[220px] ${
              entry.side === "left"
                ? "justify-start md:justify-start"
                : "justify-start md:justify-end"
            }`}
          >
            <div
              className={`timeline-node absolute left-4 top-8 z-10 -translate-x-1/2 md:left-1/2`}
              aria-hidden="true"
            />

            <article
              className={`experience-card ml-10 w-full rounded-2xl border border-white/10 bg-[#111827]/80 p-5 backdrop-blur-sm sm:p-6 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                entry.side === "right" ? "md:mr-0" : "md:ml-0"
              }`}
            >
              <h3 className="text-base font-bold text-[#DCDFD2] sm:text-lg">
                {entry.header}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#0080B0]">
                {entry.company} • {entry.location}
              </p>
              <p className="mt-1 font-[family-name:var(--font-geist-mono)] text-xs text-[#94A3B8]">
                {entry.duration}
              </p>

              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed text-[#94A3B8]"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0080B0]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2">
                {entry.tech.map((tag) => (
                  <li key={tag}>
                    <span className="inline-block rounded-full border border-[#0080B0]/40 bg-[#0080B0]/10 px-2.5 py-1 text-xs font-medium text-[#0080B0]">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>

              {entry.links && entry.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {entry.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#DCDFD2] transition-colors duration-200 hover:border-[#0080B0]/50 hover:bg-[#0080B0]/15"
                    >
                      {link.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
