"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";
import NavSectionLink from "./NavSectionLink";
import { navItems } from "./nav-items";

export default function NavDropdown() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative shrink-0">
      <button
        type="button"
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((prev) => !prev)}
        className="status-bar-dropdown cursor-pointer rounded border border-white/15 bg-black/30 p-1.5 text-[#DCDFD2] transition-colors duration-200 hover:border-[#0080B0]/50 hover:bg-[#0080B0]/15"
      >
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="menu"
          className="absolute left-0 top-[calc(100%+0.5rem)] z-50 min-w-[11rem] overflow-hidden rounded-md border border-white/15 bg-[#0f172a]/95 py-1 shadow-xl backdrop-blur-md"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id} role="none">
                <NavSectionLink
                  item={item}
                  isActive={isActive}
                  onNavigate={() => setOpen(false)}
                  className={`block cursor-pointer px-3 py-2 font-[family-name:var(--font-geist-mono)] text-xs transition-colors duration-200 ${
                    isActive
                      ? "bg-[#0080B0]/30 text-[#DCDFD2]"
                      : "text-[#94A3B8] hover:bg-white/5 hover:text-[#DCDFD2]"
                  }`}
                >
                  {`{${item.tag}_}`}
                </NavSectionLink>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
