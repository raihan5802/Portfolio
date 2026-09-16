"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type FaceDirection = "front" | "left" | "right" | "up" | "down";

const DIRECTIONS: FaceDirection[] = [
  "front",
  "left",
  "right",
  "up",
  "down",
];

const FACE_IMAGES: Record<FaceDirection, string> = {
  front: "/face-animation/front.webp",
  left: "/face-animation/left.webp",
  right: "/face-animation/right.webp",
  up: "/face-animation/up.webp",
  down: "/face-animation/down.webp",
};

const ENTER_THRESHOLD_X = 150;
const ENTER_THRESHOLD_Y = 110;
const EXIT_THRESHOLD_X = 95;
const EXIT_THRESHOLD_Y = 70;
const SMOOTH_FACTOR = 0.09;
const FADE_EASE = [0.22, 1, 0.36, 1] as const;
const HOME_SCROLL_LOOK_DOWN = 48;

function shouldTrackMouseAtHome(): boolean {
  const home = document.getElementById("home");
  if (!home) return window.scrollY < HOME_SCROLL_LOOK_DOWN;

  const rect = home.getBoundingClientRect();
  const atPageTop = window.scrollY < HOME_SCROLL_LOOK_DOWN;
  const heroAnchored = rect.top >= -32 && rect.top <= 120;

  return atPageTop && heroAnchored;
}

function getDirection(
  clientX: number,
  clientY: number,
  current: FaceDirection
): FaceDirection {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const dx = clientX - centerX;
  const dy = clientY - centerY;

  const thresholdX =
    current === "front" ? ENTER_THRESHOLD_X : EXIT_THRESHOLD_X;
  const thresholdY =
    current === "front" ? ENTER_THRESHOLD_Y : EXIT_THRESHOLD_Y;

  if (Math.abs(dx) < thresholdX && Math.abs(dy) < thresholdY) {
    return "front";
  }

  const next =
    Math.abs(dx) >= Math.abs(dy)
      ? dx < 0
        ? "left"
        : "right"
      : dy < 0
        ? "up"
        : "down";

  if (current !== "front" && current !== next) {
    const switchX = ENTER_THRESHOLD_X * 1.2;
    const switchY = ENTER_THRESHOLD_Y * 1.2;
    if (Math.abs(dx) < switchX && Math.abs(dy) < switchY) {
      return "front";
    }
  }

  return next;
}

export default function InteractiveFace() {
  const [direction, setDirection] = useState<FaceDirection>("front");
  const reduceMotion = useReducedMotion();
  const directionRef = useRef<FaceDirection>("front");
  const trackMouseRef = useRef(true);

  useEffect(() => {
    if (reduceMotion) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let smoothX = targetX;
    let smoothY = targetY;
    let rafId = 0;

    const updateScrollState = () => {
      const shouldTrack = shouldTrackMouseAtHome();
      trackMouseRef.current = shouldTrack;

      if (!shouldTrack && directionRef.current !== "down") {
        directionRef.current = "down";
        setDirection("down");
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const onMouseLeave = () => {
      targetX = window.innerWidth / 2;
      targetY = window.innerHeight / 2;
    };

    const tick = () => {
      updateScrollState();

      if (!trackMouseRef.current) {
        rafId = window.requestAnimationFrame(tick);
        return;
      }

      smoothX += (targetX - smoothX) * SMOOTH_FACTOR;
      smoothY += (targetY - smoothY) * SMOOTH_FACTOR;

      const next = getDirection(smoothX, smoothY, directionRef.current);

      if (next !== directionRef.current) {
        directionRef.current = next;
        setDirection(next);
      }

      rafId = window.requestAnimationFrame(tick);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.cancelAnimationFrame(rafId);
    };
  }, [reduceMotion]);

  const fadeDuration = reduceMotion ? 0.01 : 0.32;

  return (
    <div className="relative mx-auto lg:mx-0">
      <div className="absolute inset-0 rounded-full bg-[#0080B0]/20 blur-3xl" />
      <div className="relative rounded-full border-2 border-white/20 bg-[#0080B0] p-1.5 shadow-[0_0_40px_rgba(0,128,176,0.3)]">
        <div className="relative h-72 w-72 overflow-hidden rounded-full bg-[#0080B0] sm:h-80 sm:w-80 lg:h-96 lg:w-96">
          {DIRECTIONS.map((dir) => (
            <motion.div
              key={dir}
              className="absolute inset-0"
              animate={{ opacity: direction === dir ? 1 : 0 }}
              transition={{ duration: fadeDuration, ease: FADE_EASE }}
              style={{
                zIndex: direction === dir ? 2 : 1,
                pointerEvents: direction === dir ? "auto" : "none",
              }}
              aria-hidden={direction !== dir}
            >
              <Image
                src={FACE_IMAGES[dir]}
                alt={dir === "front" ? "MD Raihan Chowdhury" : ""}
                fill
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                className="object-cover object-center"
                priority={dir === "front"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
