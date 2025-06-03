import { useEffect } from "react";
import useAutoTOC from "../hooks/useAutoTOC";
import { useTOCContext } from "../context/TOCContext";

export default function TableOfContents() {
  const toc = useAutoTOC("doc-content");
  const { activeSectionId, setActiveSectionId } = useTOCContext();

  // Scroll to element by manually clicking on TOC item
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveSectionId(id);

      // Scroll to the element with a slight offset
      const yOffset = -25;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Observe which heading is in view
  useEffect(() => {
    const headingIds = toc.flatMap((section) => [
      section.id,
      ...section.subTopics.map((sub) => sub.id),
    ]);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSectionId(visible[0].target.id);
        }
      },
      {
        rootMargin: "0% 0% -80% 0%",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    headingIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSectionId, toc]);

  return (
    <aside className="hidden xl:block w-84 fixed right-0 top-12 pr-10">
      <div className="bg-white rounded-xl shadow-2xl p-4 sticky top-20 max-h-[80vh] overflow-auto">
        <h2 className="text-sm font-semibold text-[#0E09B4] mb-4">
          On this page
        </h2>

        {toc.length === 0 ? (
          <p className="text-sm text-gray-500">Loading table of contents...</p>
        ) : (
          <div className="space-y-4">
            {toc.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`block text-left text-sm font-semibold w-full mb-1 cursor-pointer hover:underline ${
                    activeSectionId === section.id
                      ? "text-black"
                      : "text-gray-800"
                  }`}
                >
                  {section.label}
                </button>

                <div className="pl-4 space-y-2">
                  {section.subTopics.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => scrollTo(sub.id)}
                      className={`block text-left text-sm w-full cursor-pointer hover:underline ${
                        activeSectionId === sub.id
                          ? "text-black font-medium"
                          : "text-gray-600"
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
