export type SkillCategoryId =
  | "languages"
  | "frontend"
  | "backend"
  | "data"
  | "devops";

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  shortLabel: string;
}

export interface SkillItem {
  name: string;
  accent?: string;
}

export interface Certification {
  title: string;
  score: string;
  href: string;
}

export const skillCategories: SkillCategory[] = [
  { id: "languages", label: "Languages", shortLabel: "Lang" },
  { id: "frontend", label: "Frontend", shortLabel: "FE" },
  { id: "backend", label: "Backend", shortLabel: "BE" },
  { id: "data", label: "Data", shortLabel: "Data" },
  { id: "devops", label: "DevOps", shortLabel: "Ops" },
];

export const skillsByCategory: Record<SkillCategoryId, SkillItem[]> = {
  languages: [
    { name: "Python", accent: "#3776AB" },
    { name: "TypeScript", accent: "#3178C6" },
    { name: "JavaScript", accent: "#F7DF1E" },
    { name: "Java", accent: "#ED8B00" },
    { name: "SQL", accent: "#0080B0" },
    { name: "HTML5", accent: "#E34F26" },
    { name: "CSS3", accent: "#1572B6" },
    { name: "Fortran", accent: "#734F96" },
  ],
  frontend: [
    { name: "React.js", accent: "#61DAFB" },
    { name: "Next.js", accent: "#DCDFD2" },
    { name: "Tailwind CSS", accent: "#06B6D4" },
    { name: "Framer Motion", accent: "#0080B0" },
    { name: "shadcn/ui", accent: "#DCDFD2" },
    { name: "Responsive UI", accent: "#0080B0" },
  ],
  backend: [
    { name: "FastAPI", accent: "#009688" },
    { name: "Node.js", accent: "#339933" },
    { name: "Flask", accent: "#DCDFD2" },
    { name: "REST APIs", accent: "#0080B0" },
    { name: "Redis", accent: "#DC382D" },
    { name: "PostgreSQL", accent: "#336791" },
    { name: "Supabase", accent: "#3ECF8E" },
  ],
  data: [
    { name: "Pandas", accent: "#150458" },
    { name: "NumPy", accent: "#013243" },
    { name: "Polars", accent: "#0080B0" },
    { name: "Matplotlib", accent: "#11557C" },
    { name: "Data Pipelines", accent: "#0080B0" },
    { name: "Predictive Modeling", accent: "#0080B0" },
  ],
  devops: [
    { name: "Git", accent: "#F05032" },
    { name: "Docker SDK", accent: "#2496ED" },
    { name: "Vercel", accent: "#DCDFD2" },
    { name: "Vitest", accent: "#6E9F48" },
    { name: "Railway", accent: "#0B0D0E" },
    { name: "AWS SageMaker", accent: "#FF9900" },
  ],
};

export const mlAiSkills: SkillItem[] = [
  { name: "LangGraph", accent: "#0080B0" },
  { name: "PyTorch", accent: "#EE4C2C" },
  { name: "YOLOv11", accent: "#0080B0" },
  { name: "scikit-learn", accent: "#F7931E" },
  { name: "OpenAI Whisper", accent: "#10A37F" },
  { name: "DeepSeek V3", accent: "#0080B0" },
  { name: "Computer Vision", accent: "#0080B0" },
  { name: "ClaudeCode", accent: "#D97757" },
  { name: "Cursor", accent: "#0080B0" },
];

export const certifications: Certification[] = [
  {
    title: "Foundations of Data Science",
    score: "95.50%",
    href: "https://www.coursera.org/account/accomplishments/verify/4IQMNG60SRLU?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    score: "98.25%",
    href: "https://www.coursera.org/account/accomplishments/verify/A3Q96YHSJRAL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
];
