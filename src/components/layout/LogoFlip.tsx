"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CONTACT_EMAIL } from "@/lib/contact";

const FLIP_EASE = [0.22, 1, 0.36, 1] as const;

export default function LogoFlip() {
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();

  const showProfile = active;
  const flipTransition = reduceMotion
    ? { duration: 0.15, ease: "easeOut" as const }
    : { duration: 0.55, ease: FLIP_EASE };

  const pillTransition = reduceMotion
    ? { duration: 0.15, ease: "easeOut" as const }
    : { duration: 0.42, ease: FLIP_EASE, delay: active ? 0.18 : 0 };

  return (
    <div
      className="flex items-center outline-none"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActive(false);
        }
      }}
    >
      <Link
        href="#home"
        aria-label="Home"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#0080B0] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent [perspective:900px]"
      >
        {reduceMotion ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_0_20px_rgba(0,128,176,0.25)] sm:h-11 sm:w-11">
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: showProfile ? 0 : 1 }}
              transition={flipTransition}
            >
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-cover"
                priority
              />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              animate={{ opacity: showProfile ? 1 : 0 }}
              transition={flipTransition}
            >
              <Image
                src="/profile.png"
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="relative h-10 w-10 sm:h-11 sm:w-11"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: showProfile ? 180 : 0 }}
            transition={flipTransition}
          >
            <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_0_20px_rgba(0,128,176,0.25)] [backface-visibility:hidden]">
              <Image
                src="/logo.png"
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-white/90 shadow-[0_0_20px_rgba(0,128,176,0.25)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <Image
                src="/profile.png"
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </Link>

      <motion.div
        className="hidden overflow-hidden lg:block"
        initial={false}
        animate={{
          maxWidth: active ? 132 : 0,
          opacity: active ? 1 : 0,
          marginLeft: active ? 10 : 0,
        }}
        transition={pillTransition}
        aria-hidden={!active}
      >
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          tabIndex={active ? 0 : -1}
          className="inline-flex cursor-pointer items-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#DCDFD2] backdrop-blur-sm transition-colors duration-200 hover:border-[#0080B0]/50 hover:bg-[#0080B0]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0080B0]"
        >
          👋 Say hi
        </a>
      </motion.div>
    </div>
  );
}
