"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import type { NavItem } from "./nav-items";

interface NavSectionLinkProps {
  item: NavItem;
  isActive: boolean;
  className: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}

export default function NavSectionLink({
  item,
  isActive,
  className,
  children,
  onNavigate,
}: NavSectionLinkProps) {
  return (
    <a
      href={`#${item.id}`}
      aria-current={isActive ? "true" : undefined}
      onClick={(event) => {
        event.preventDefault();
        scrollToSection(item.id);
        onNavigate?.();
      }}
      className={className}
    >
      {children}
    </a>
  );
}
