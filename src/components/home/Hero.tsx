import { Github, Linkedin, Mail } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
} from "@/lib/contact";
import InteractiveFace from "./InteractiveFace";
import RoleGlitchText from "./RoleGlitchText";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-28 relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center overflow-x-hidden px-4 pb-16 pt-24 sm:scroll-mt-32 sm:px-6 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
        <div className="min-w-0 space-y-5 text-center sm:space-y-6 lg:text-left">
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#94A3B8] sm:text-base">
            Hello, I am
          </p>
          <h1 className="text-[clamp(1.75rem,7vw,2.5rem)] font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-[#DCDFD2]">MD Raihan </span>
            <span className="text-[#0080B0]">Chowdhury</span>
          </h1>
          <RoleGlitchText />
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-[#94A3B8] sm:text-base sm:leading-relaxed lg:mx-0 lg:text-lg">
            Passionate about turning complex algorithms into production-ready
            software. Whether training vision models, automating workflows, or
            winning datathons, I build efficient tech that makes an impact.
          </p>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div className="flex w-full max-w-xs flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hidden cursor-pointer rounded-full bg-[#0080B0] px-6 py-3 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#0099cc] lg:inline-flex lg:justify-center"
              >
                Get in touch
              </a>
              <a
                href="/MdRaihanChowdhury_resume.pdf"
                download="MdRaihanChowdhury_Resume.pdf"
                className="cursor-pointer rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-[#DCDFD2] transition-colors duration-200 hover:border-white/40 hover:bg-white/5"
              >
                Download Resume
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={CONTACT_LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="cursor-pointer rounded-full border border-white/10 p-3 text-[#94A3B8] transition-colors duration-200 hover:border-white/25 hover:bg-white/5 hover:text-[#DCDFD2]"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={CONTACT_GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="cursor-pointer rounded-full border border-white/10 p-3 text-[#94A3B8] transition-colors duration-200 hover:border-white/25 hover:bg-white/5 hover:text-[#DCDFD2]"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email"
                className="cursor-pointer rounded-full border border-white/10 p-3 text-[#94A3B8] transition-colors duration-200 hover:border-white/25 hover:bg-white/5 hover:text-[#DCDFD2]"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <InteractiveFace />
        </div>
      </div>
    </section>
  );
}
