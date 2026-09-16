"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { scrollToSection } from "@/lib/scroll-to-section";
import LogoFlip from "./LogoFlip";
import MobileNavMenu from "./MobileNavMenu";
import NavLinks from "./NavLinks";
import ScrollStatusBar from "./ScrollStatusBar";

const SCROLL_THRESHOLD = 72;

function getScrollProgress(): number {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollHeight <= 0) return 0;

  return Math.min(
    100,
    Math.max(0, Math.round((window.scrollY / scrollHeight) * 100))
  );
}

export default function Header() {
  const [isStatusBar, setIsStatusBar] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => {
      setIsStatusBar(window.scrollY > SCROLL_THRESHOLD);
      setProgress(getScrollProgress());
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const transition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150">
      <AnimatePresence mode="wait" initial={false}>
        {!isStatusBar ? (
          <motion.div
            key="nav-header"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={transition}
            className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:justify-normal lg:gap-6"
          >
            <div className="flex shrink-0 items-center justify-start">
              <LogoFlip />
            </div>
            <div className="hidden min-w-0 lg:block">
              <NavLinks />
            </div>
            <div className="flex shrink-0 items-center justify-end gap-2">
              <MobileNavMenu />
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="cta-get-in-touch hidden cursor-pointer whitespace-nowrap rounded-full border border-[#0080B0]/60 bg-[#0080B0]/20 px-5 py-2 text-sm font-semibold text-[#DCDFD2] lg:inline-flex"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="status-bar"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={transition}
          >
            <ScrollStatusBar progress={progress} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
