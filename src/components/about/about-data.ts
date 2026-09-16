import { CONTACT_EMAIL } from "@/lib/contact";

export const aboutSummary =
  "I am Md Raihan Chowdhury, a Software & AI Systems Engineer based in Shantibagh, Dhaka, Bangladesh. I build scalable software, agentic AI systems, and automated pipelines, leveraging strong backend architecture and modern web technologies to solve real-world problems.";

export const aboutContact = [
  {
    icon: "mail" as const,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: "location" as const,
    label: "Location",
    value: "Shantibagh, Dhaka, Bangladesh",
  },
  {
    icon: "education" as const,
    label: "Education",
    value: "B.Sc. in Computer Science and Engineering",
  },
];

export const coreAreas = [
  "AI Engineering",
  "LLM Apps & Agents",
  "Full-Stack Web Development",
  "Backend APIs (FastAPI/Node.js)",
  "React + Next.js",
  "Python & TypeScript",
  "PostgreSQL & Supabase",
  "DevOps & Docker",
];

export const educationHistory = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "North South University, Dhaka",
    timeline: "2020 – 2025",
    result: "CGPA: 3.23/4.00",
  },
  {
    degree: "A Levels",
    institution: "British Council, Bangladesh",
    timeline: "2018 – 2019",
    result: "GPA: 2.5",
  },
  {
    degree: "O Levels",
    institution: "Maple Leaf International School",
    timeline: "2017 – 2018",
    result: "GPA: 5.0",
  },
];
