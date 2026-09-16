export interface ProjectLink {
  label: string;
  href: string;
  type: "demo" | "github";
}

export interface ProjectEntry {
  id: string;
  direction: "ltr" | "rtl";
  image: string;
  title: string;
  tech: string[];
  bullets: string[];
  links: ProjectLink[];
}

export const projectEntries: ProjectEntry[] = [
  {
    id: "pr-fixer",
    direction: "ltr",
    image: "/projects/pr-fixer.png",
    title: "Agentic PR Fixer — Autonomous AI Code-Review & Self-Healing Agent",
    tech: [
      "FastAPI",
      "LangGraph",
      "Docker SDK",
      "Redis",
      "PyGithub",
      "Python 3.11",
    ],
    bullets: [
      "Engineered a LangGraph and Redis state machine to automate GitHub PR reviews and stateful patch generation.",
      "Built a self-healing loop parsing pytest errors alongside sandboxed Docker SDK execution and HITL review gates.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/raihan5802/Agentic-PR-Fixer",
        type: "github",
      },
    ],
  },
  {
    id: "minutely-ai",
    direction: "rtl",
    image: "/projects/minutelyAI.png",
    title: "MinutelyAI — AI Meeting Intelligence Application",
    tech: ["Next.js 16", "FastAPI", "LangGraph", "Whisper", "Tailwind CSS"],
    bullets: [
      "Built an agentic AI app converting audio and text into structured meeting summaries, action items, and decisions.",
      "Orchestrated a 4-node LangGraph pipeline integrating local OpenAI Whisper and DeepSeek V3 for low-latency analysis.",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://minutely-5p1houdwx-raihan5802s-projects.vercel.app/",
        type: "demo",
      },
      {
        label: "GitHub",
        href: "https://github.com/raihan5802/minutelyAI",
        type: "github",
      },
    ],
  },
  {
    id: "tasksync-hq",
    direction: "ltr",
    image: "/projects/tasksyncHQ.png",
    title: "TaskSync-HQ — Multi-Tenant Real-Time Kanban Engine",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vitest",
    ],
    bullets: [
      "Built a multi-tenant Kanban platform with real-time Supabase CDC sync, optimistic UI, and 24 Vitest tests.",
      "Designed a relational PostgreSQL schema using Supabase RLS policies for multi-tenant RBAC enforcement.",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://tasksync-bbknrtsyw-raihan5802s-projects.vercel.app/",
        type: "demo",
      },
      {
        label: "GitHub",
        href: "https://github.com/raihan5802/TaskSync-HQ",
        type: "github",
      },
    ],
  },
];
