"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import NavSectionLink from "./NavSectionLink";
import { navItems } from "./nav-items";

export default function NavLinks() {
  const activeSection = useActiveSection();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <li key={item.id}>
              <NavSectionLink
                item={item}
                isActive={isActive}
                className={`cursor-pointer rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 sm:px-4 ${
                  isActive
                    ? "bg-white/15 text-[#DCDFD2]"
                    : "text-[#94A3B8] hover:bg-white/10 hover:text-[#DCDFD2]"
                }`}
              >
                {item.label}
              </NavSectionLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
