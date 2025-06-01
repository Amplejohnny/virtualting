// components/DocNavControls.tsx
interface Props {
  sectionIds: string[];
  activeIndex: number;
}

export default function DocNavControls({ sectionIds, activeIndex }: Props) {
  const prev = sectionIds[activeIndex - 1];
  const next = sectionIds[activeIndex + 1];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between items-center mt-12">
      {prev ? (
        <button
          onClick={() => scrollTo(prev)}
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back
        </button>
      ) : (
        <span />
      )}

      {next ? (
        <button
          onClick={() => scrollTo(next)}
          className="text-blue-600 hover:underline font-medium ml-auto"
        >
          Next →
        </button>
      ) : (
        <span />
      )}
    </div>
  );
}
