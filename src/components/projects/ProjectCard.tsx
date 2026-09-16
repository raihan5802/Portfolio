"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ProjectEntry } from "./projects-data";

const SLIDE_EASE = [0.22, 1, 0.36, 1] as const;

interface ProjectCardProps {
  project: ProjectEntry;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const isRtl = project.direction === "rtl";
  const slideOffset = isRtl ? 72 : -72;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, x: slideOffset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={
        reduceMotion
          ? { duration: 0.01 }
          : { duration: 0.65, ease: SLIDE_EASE }
      }
      className="project-card overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 backdrop-blur-sm"
    >
      <div
        className={`grid items-stretch gap-0 md:grid-cols-2 ${
          isRtl ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[16/10] min-h-[360px] overflow-hidden bg-[#0a1628] md:aspect-auto md:min-h-[580px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#111827]/40"
            aria-hidden="true"
          />
        </div>

        <div className="flex min-h-[360px] flex-col justify-center p-7 sm:p-8 md:min-h-[580px] md:p-12">
          <h3 className="text-base font-bold leading-snug text-[#DCDFD2] sm:text-lg">
            {project.title}
          </h3>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <li key={tag}>
                <span className="inline-block rounded-full border border-[#0080B0]/40 bg-[#0080B0]/10 px-2.5 py-1 text-xs font-medium text-[#0080B0]">
                  {tag}
                </span>
              </li>
            ))}
          </ul>

          <ul className="mt-5 space-y-2">
            {project.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-2 text-sm leading-relaxed text-[#94A3B8]"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0080B0]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.links.map((link) => {
              const Icon = link.type === "github" ? Github : ExternalLink;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#DCDFD2] transition-colors duration-200 hover:border-[#0080B0]/50 hover:bg-[#0080B0]/15"
                >
                  {link.label}
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
