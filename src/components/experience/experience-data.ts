export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  id: string;
  side: "left" | "right";
  header: string;
  company: string;
  location: string;
  duration: string;
  bullets: string[];
  tech: string[];
  links?: ExperienceLink[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "triliant",
    side: "left",
    header: "🏢 Software Engineer",
    company: "Triliant Data",
    location: "Dhaka, Bangladesh",
    duration: "February 2026 – Present",
    bullets: [
      "Engineered end-to-end AI workflows and REST API integrations, reducing system response times and boosting automated processing reliability.",
      "Architected and deployed Annotigo, an automated AI data-annotation platform with custom webhooks and background processing.",
    ],
    tech: ["FastAPI", "REST APIs", "AI Workflows", "Webhooks", "Docker"],
  },
  {
    id: "synnax",
    side: "right",
    header: "📊 Data Scientist",
    company: "Synnax Lab",
    location: "Remote",
    duration: "November 2024 – July 2026",
    bullets: [
      "Built and deployed AI-driven predictive models for the Synnax Predictive Credit Intelligence Protocol.",
      "Engineered scalable data pipelines to process high-volume financial datasets with daily automated model retraining.",
    ],
    tech: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Data Pipelines",
      "Predictive Modeling",
    ],
  },
  {
    id: "freelance",
    side: "left",
    header: "🌐 Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote / Global",
    duration: "Ongoing / Project-Based",
    bullets: [
      "mjapparelsltd.com: Designed and built a full corporate platform for an apparel manufacturing company.",
      "hopetkf.org.au: Developed a web application for an Australian non-profit charity foundation.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "UI/UX"],
    links: [
      { label: "mjapparelsltd.com", href: "https://mjapparelsltd.com" },
      { label: "hopetkf.org.au", href: "https://hopetkf.org.au" },
    ],
  },
];
