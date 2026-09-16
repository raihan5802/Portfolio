export interface NavItem {
  label: string;
  tag: string;
  id: string;
}

export const navItems: NavItem[] = [
  { label: "Home", tag: "home", id: "home" },
  { label: "About", tag: "about", id: "about" },
  { label: "Experience", tag: "experience", id: "experience" },
  { label: "Projects", tag: "projects", id: "projects" },
  { label: "Skills", tag: "skills", id: "skills" },
  { label: "Contact", tag: "contact", id: "contact" },
];

export const sectionIds = navItems.map((item) => item.id);
