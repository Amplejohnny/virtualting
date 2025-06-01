import { useEffect } from "react";
import useAutoTOC from "../hooks/useAutoTOC";
import { useTOC } from "../context/TOCContext";

export default function TableOfContents() {
  const { activeSectionId } = useTOC();
  const toc = useAutoTOC("doc-content");

  useEffect(() => {
    console.debug("TOC state:", { toc, activeSectionId });
  }, [toc, activeSectionId]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Find the active section or default to the first section
  const active = toc.find((section) => section.id === activeSectionId) ?? toc[0];

  return (
    <aside className="hidden xl:block w-84 fixed right-0 top-20 pr-10">
      <div className="bg-white rounded-xl shadow-2xl p-4 sticky top-20 max-h-[80vh] overflow-auto">
        <h2 className="text-sm font-semibold text-[#0E09B4] mb-4">
          On this page
        </h2>

        {toc.length === 0 ? (
          <p className="text-sm text-gray-500">Loading table of contents...</p>
        ) : !active ? (
          <p className="text-sm text-gray-500">No active section found.</p>
        ) : (
          <div className="space-y-2">
            <button
              onClick={() => scrollTo(active.id)}
              className="block text-left text-sm font-semibold w-full mb-1 text-black cursor-pointer hover:underline"
            >
              {active.label}
            </button>
            <div className="pl-4 space-y-2">
              {active.subTopics.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => scrollTo(sub.id)}
                  className="block text-sm text-gray-600 hover:text-black hover:underline text-left w-full cursor-pointer"
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}