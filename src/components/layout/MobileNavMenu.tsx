"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import NavSectionLink from "./NavSectionLink";
import { navItems } from "./nav-items";

export default function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const panelTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const };

  const menuOverlay =
    mounted && open
      ? createPortal(
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              id="mobile-nav-panel"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={panelTransition}
              className="fixed left-4 right-4 top-[4.25rem] z-[70] overflow-hidden rounded-2xl border border-white/15 bg-[#0f172a] shadow-2xl lg:hidden"
            >
              <ul className="py-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <li key={item.id}>
                      <NavSectionLink
                        item={item}
                        isActive={isActive}
                        onNavigate={() => setOpen(false)}
                        className={`block cursor-pointer px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "bg-[#0080B0]/25 text-[#DCDFD2]"
                            : "text-[#94A3B8] hover:bg-white/5 hover:text-[#DCDFD2]"
                        }`}
                      >
                        {item.label}
                      </NavSectionLink>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-[80] cursor-pointer rounded-full border border-white/15 bg-black/20 p-2.5 text-[#DCDFD2] transition-colors duration-200 hover:border-[#0080B0]/50 hover:bg-[#0080B0]/15 lg:hidden"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {menuOverlay}
    </>
  );
}
