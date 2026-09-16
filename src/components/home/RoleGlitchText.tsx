"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const ROLES = [
  "AI Engineer",
  "Software Developer",
  "Systems Designer",
  "Problem Solver",
] as const;

const GLITCH_CHARS = ["{", "/", "%", "#", "_", "<", ">"] as const;
const DISPLAY_MS = 2200;
const GLITCH_MS = 220;

function scrambleText(length: number): string {
  return Array.from(
    { length },
    () => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
  ).join("");
}

export default function RoleGlitchText() {
  const [displayText, setDisplayText] = useState<string>(ROLES[0]);
  const [isGlitching, setIsGlitching] = useState(false);
  const reduceMotion = useReducedMotion();
  const roleIndexRef = useRef(0);

  useEffect(() => {
    if (reduceMotion) {
      let index = 0;
      const id = setInterval(() => {
        index = (index + 1) % ROLES.length;
        setDisplayText(ROLES[index]);
      }, DISPLAY_MS);
      return () => clearInterval(id);
    }

    let scrambleInterval: ReturnType<typeof setInterval> | null = null;
    let glitchTimeout: ReturnType<typeof setTimeout> | null = null;

    const advanceRole = () => {
      setIsGlitching(true);
      const scrambleLength = Math.max(...ROLES.map((role) => role.length));

      scrambleInterval = setInterval(() => {
        setDisplayText(scrambleText(scrambleLength));
      }, 40);

      glitchTimeout = setTimeout(() => {
        if (scrambleInterval) clearInterval(scrambleInterval);
        roleIndexRef.current = (roleIndexRef.current + 1) % ROLES.length;
        setDisplayText(ROLES[roleIndexRef.current]);
        setIsGlitching(false);
      }, GLITCH_MS);
    };

    const cycleInterval = setInterval(advanceRole, DISPLAY_MS);

    return () => {
      clearInterval(cycleInterval);
      if (scrambleInterval) clearInterval(scrambleInterval);
      if (glitchTimeout) clearTimeout(glitchTimeout);
    };
  }, [reduceMotion]);

  return (
    <p
      className={`min-h-[2rem] font-[family-name:var(--font-geist-mono)] text-lg text-[#0080B0] sm:min-h-[2.25rem] sm:text-xl ${
        isGlitching ? "preloader-glitch" : ""
      }`}
      aria-live="polite"
    >
      {displayText}
    </p>
  );
}
