import { useEffect } from "react";
import { Heading } from "../components/docSection";
import { useTOCContext } from "../context/TOCContext";
import { useSectionNavigator } from "../hooks/useSectionNavigator";
import { resourcesSections } from "../data/resources-docs";

export default function ResourcesPage() {
  const { setActiveSectionId } = useTOCContext();
  const { current, currentIndex, goTo } =
    useSectionNavigator(resourcesSections);

  useEffect(() => {
    if (current?.id) {
      setActiveSectionId(current.id);
      const el = document.getElementById(current.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [current, setActiveSectionId]);

  return (
    <div id="doc-content" className="relative px-4 pb-16">
      <Heading id={current.id} title={current.title}>
        {current.content}
      </Heading>

      <div className="flex justify-between mt-28">
        <button
          onClick={() => goTo(currentIndex - 1)}
          disabled={currentIndex === 0}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            currentIndex === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white cursor-pointer"
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => goTo(currentIndex + 1)}
          disabled={currentIndex === resourcesSections.length - 1}
          className={`px-8 py-3 rounded-md text-sm font-medium ${
            currentIndex === resourcesSections.length - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white cursor-pointer"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
