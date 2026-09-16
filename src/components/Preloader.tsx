"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ENGLISH_TEXT = "COMPILING SOFTWARE & AI SYSTEMS...";
const BANGLA_TEXT = "সফ্টওয়্যার ও এআই সিস্টেম কম্পাইল হচ্ছে...";
const GLITCH_CHARS = ["{", "/", "%", "0x1", "#", "_", "<", ">"] as const;

const ROW_COUNT = 4;
const ROW_STAGGER_MS = 150;
const ROW_SLIDE_MS = 450;
const TOTAL_EXIT_MS = (ROW_COUNT - 1) * ROW_STAGGER_MS + ROW_SLIDE_MS;
const SCRAMBLE_LENGTH = Math.max(ENGLISH_TEXT.length, BANGLA_TEXT.length);

type PhaseKind = "english" | "bangla" | "glitch";

const TIMELINE: { kind: PhaseKind; durationMs: number }[] = [
  { kind: "english", durationMs: 600 },
  { kind: "glitch", durationMs: 300 },
  { kind: "bangla", durationMs: 600 },
  { kind: "glitch", durationMs: 300 },
  { kind: "english", durationMs: 600 },
  { kind: "glitch", durationMs: 300 },
  { kind: "bangla", durationMs: 300 },
];

const PRELOADER_DURATION_MS = TIMELINE.reduce(
  (total, step) => total + step.durationMs,
  0
);

interface PreloaderProps {
  onComplete?: () => void;
}

function scrambleText(length: number): string {
  return Array.from(
    { length },
    () => GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
  ).join("");
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [visible, setVisible] = useState(true);
  const [displayText, setDisplayText] = useState(ENGLISH_TEXT);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const glitchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const phaseTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearGlitchInterval = useCallback(() => {
    if (glitchIntervalRef.current) {
      clearInterval(glitchIntervalRef.current);
      glitchIntervalRef.current = null;
    }
  }, []);

  const startGlitchScramble = useCallback(() => {
    clearGlitchInterval();
    glitchIntervalRef.current = setInterval(() => {
      setDisplayText(scrambleText(SCRAMBLE_LENGTH));
    }, 35);
  }, [clearGlitchInterval]);

  const renderGrid = () => (
    <div className="preloader-grid pointer-events-auto grid h-screen w-screen grid-cols-3 grid-rows-8 gap-0">
      {/* div1: rows 1-2 */}
      <div className="preloader-panel col-span-3 row-span-2 flex items-end justify-center border-b border-[#607080]/20 pb-6">
        <div className="flex items-center gap-3 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.35em] sm:text-sm">
          <span
            className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#0080B0] shadow-[0_0_14px_#0080B0]"
            aria-hidden="true"
          />
          <span className="text-[#0080B0]">SYSTEM STATUS: OPTIMAL</span>
        </div>
      </div>

      {/* div2 + div3 merged: rows 3-6 */}
      <div className="preloader-panel col-span-3 row-span-4 flex items-center justify-center border-b border-[#607080]/20 px-6">
        <p
          className={`max-w-4xl text-center font-[family-name:var(--font-geist-mono)] text-lg leading-relaxed text-[#DCDFD2] sm:text-2xl md:text-3xl ${
            isGlitching ? "preloader-glitch" : ""
          }`}
          aria-live="polite"
        >
          {displayText}
        </p>
      </div>

      {/* div4: rows 7-8 */}
      <div className="preloader-panel col-span-3 row-span-2" aria-hidden="true" />
    </div>
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const schedule = (fn: () => void, delay: number) => {
      const id = setTimeout(fn, delay);
      phaseTimersRef.current.push(id);
    };

    let elapsed = 0;

    TIMELINE.forEach((step) => {
      schedule(() => {
        if (step.kind === "english") {
          clearGlitchInterval();
          setIsGlitching(false);
          setDisplayText(ENGLISH_TEXT);
        } else if (step.kind === "bangla") {
          clearGlitchInterval();
          setIsGlitching(false);
          setDisplayText(BANGLA_TEXT);
        } else {
          setIsGlitching(true);
          startGlitchScramble();
        }
      }, elapsed);

      elapsed += step.durationMs;
    });

    schedule(() => {
      clearGlitchInterval();
      setIsExiting(true);
    }, PRELOADER_DURATION_MS);

    schedule(() => {
      document.body.style.overflow = "";
      setVisible(false);
      onComplete?.();
    }, PRELOADER_DURATION_MS + TOTAL_EXIT_MS);

    return () => {
      document.body.style.overflow = "";
      phaseTimersRef.current.forEach(clearTimeout);
      phaseTimersRef.current = [];
      clearGlitchInterval();
    };
  }, [clearGlitchInterval, onComplete, startGlitchScramble]);

  if (!visible) return null;

  const rowHeight = 100 / ROW_COUNT;

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none"
      aria-busy={!isExiting}
      aria-label="Loading"
    >
      {!isExiting ? (
        renderGrid()
      ) : (
        <div className="relative h-screen w-screen overflow-hidden">
          {Array.from({ length: ROW_COUNT }).map((_, index) => (
            <div
              key={index}
              className="absolute left-0 w-full overflow-hidden"
              style={{
                top: `${index * rowHeight}%`,
                height: `${rowHeight}%`,
              }}
            >
              <div
                className="preloader-row-exit pointer-events-auto absolute left-0 h-screen w-screen"
                style={{
                  top: `-${index * rowHeight}vh`,
                  animationDelay: `${index * ROW_STAGGER_MS}ms`,
                }}
              >
                {renderGrid()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
