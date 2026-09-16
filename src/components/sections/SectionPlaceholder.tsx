interface SectionPlaceholderProps {
  id: string;
  title: string;
}

export default function SectionPlaceholder({
  id,
  title,
}: SectionPlaceholderProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 flex min-h-[60vh] items-center justify-center px-6 py-20 sm:scroll-mt-32"
    >
      <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#607080]">
        {title} — coming soon
      </p>
    </section>
  );
}
