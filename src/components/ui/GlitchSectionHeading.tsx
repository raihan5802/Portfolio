"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const GLITCH_CHARS = ["{", "/", "%", "#", "_", "<", ">", "}"] as const;
const GLITCH_MS = 240;
const INTERVAL_MS = 4000;

function scrambleText(length: number): string {
  return Array.from(
    { length },
    () => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
  ).join("");
}

interface GlitchSectionHeadingProps {
  text: string;
  ariaLabel?: string;
}

export default function GlitchSectionHeading({
  text,
  ariaLabel,
}: GlitchSectionHeadingProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const reduceMotion = useReducedMotion();
  const scrambleRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    if (reduceMotion) return;

    const runGlitch = () => {
      setIsGlitching(true);
      scrambleRef.current = setInterval(() => {
        setDisplayText(scrambleText(text.length));
      }, 35);

      setTimeout(() => {
        if (scrambleRef.current) clearInterval(scrambleRef.current);
        setDisplayText(text);
        setIsGlitching(false);
      }, GLITCH_MS);
    };

    runGlitch();
    const interval = setInterval(runGlitch, INTERVAL_MS);

    return () => {
      clearInterval(interval);
      if (scrambleRef.current) clearInterval(scrambleRef.current);
    };
  }, [reduceMotion, text]);

  return (
    <h2
      className={`text-center font-[family-name:var(--font-geist-mono)] text-3xl font-bold tracking-tight text-[#0080B0] sm:text-4xl ${
        isGlitching ? "preloader-glitch" : ""
      }`}
      aria-label={ariaLabel ?? text}
    >
      {displayText}
    </h2>
  );
}
