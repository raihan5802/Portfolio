"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import NavSectionLink from "./NavSectionLink";
import { navItems } from "./nav-items";

export default function MobileNavMenu() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();
  const menuRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const panelTransition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.24, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div ref={menuRef} className="relative lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer rounded-full border border-white/15 bg-black/20 p-2.5 text-[#DCDFD2] transition-colors duration-200 hover:border-[#0080B0]/50 hover:bg-[#0080B0]/15"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={panelTransition}
              className="fixed inset-0 top-[57px] z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.nav
              id="mobile-nav-panel"
              aria-label="Mobile navigation"
              initial={reduceMotion ? false : { opacity: 0, y: -8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={panelTransition}
              className="absolute right-0 top-[calc(100%+0.75rem)] z-50 w-[min(18rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/15 bg-[#0f172a]/95 shadow-xl backdrop-blur-md"
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
                        className={`block cursor-pointer px-4 py-3 text-sm font-medium transition-colors duration-200 ${
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
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
