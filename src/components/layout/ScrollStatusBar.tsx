"use client";

import { useActiveSection } from "@/hooks/useActiveSection";
import NavDropdown from "./NavDropdown";
import NavSectionLink from "./NavSectionLink";
import { navItems } from "./nav-items";

interface ScrollStatusBarProps {
  progress: number;
}

function getRevealAt(index: number): number {
  if (index === 0) return 0;
  return Math.round((index / (navItems.length - 1)) * 100);
}

function getCompleteAt(index: number): number {
  if (index === navItems.length - 1) return 100;
  return getRevealAt(index + 1);
}

function getTagLabel(tag: string, index: number, progress: number): string {
  const isLast = index === navItems.length - 1;
  const suffix = isLast ? "" : ", ";
  return progress >= getCompleteAt(index) ? `{${tag}}${suffix}` : `{${tag}_`;
}

export default function ScrollStatusBar({ progress }: ScrollStatusBarProps) {
  const activeSection = useActiveSection();
  const remaining = 100 - progress;

  return (
    <div className="status-bar mx-auto flex max-w-7xl items-center gap-2 px-3 py-2 sm:gap-3 sm:px-6 sm:py-2.5">
      <span className="shrink-0 font-[family-name:var(--font-geist-mono)] text-[10px] text-[#0080B0] sm:text-xs">
        {progress}%
      </span>

      <div
        className="status-bar-track relative h-9 min-w-0 flex-1 overflow-hidden rounded-md border border-white/10 bg-black/30 sm:h-10"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="absolute inset-y-0 left-0 bg-[#0080B0]/35 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />

        <nav
          aria-label="Status navigation"
          className="relative z-10 flex h-full items-center gap-0.5 px-2 sm:gap-1 sm:px-3"
        >
          {navItems.map((item, index) => {
            const isRevealed = progress >= getRevealAt(index);
            const isComplete = progress >= getCompleteAt(index);
            const isActive = activeSection === item.id;

            return (
              <NavSectionLink
                key={item.id}
                item={item}
                isActive={isActive}
                className={`status-bar-tag shrink-0 cursor-pointer px-1 py-0.5 font-[family-name:var(--font-geist-mono)] text-[10px] transition-all duration-300 sm:text-xs ${
                  isRevealed
                    ? isActive
                      ? "status-bar-tag-active translate-y-0 text-[#DCDFD2] opacity-100"
                      : isComplete
                        ? "translate-y-0 text-[#607080] opacity-80"
                        : "translate-y-0 text-[#607080] opacity-100 hover:text-[#94A3B8]"
                    : "pointer-events-none translate-y-1 opacity-0"
                }`}
              >
                {getTagLabel(item.tag, index, progress)}
              </NavSectionLink>
            );
          })}
        </nav>
      </div>

      <span className="shrink-0 font-[family-name:var(--font-geist-mono)] text-[10px] text-[#607080] sm:text-xs">
        {remaining}% remaining
      </span>

      <NavDropdown />
    </div>
  );
}
