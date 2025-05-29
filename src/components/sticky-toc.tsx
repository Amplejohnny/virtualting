import React, { useEffect, useState, useRef } from "react";
import throttle from "lodash/throttle";
import useAutoTOC from "../hooks/useAutoTOC";

export default function TableOfContents() {
  const toc = useAutoTOC("doc-content");
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  // Throttled observer to highlight active H2 section
  const throttledSetActiveSectionId = useRef(
    throttle((id: string) => setActiveSectionId(id), 100)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.tagName === "H2") {
            throttledSetActiveSectionId.current(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0.5 }
    );

    toc.forEach((section) => {
      const sectionEl = document.getElementById(section.id);
      if (sectionEl) observer.observe(sectionEl);
    });

    return () => observer.disconnect();
  }, [toc]);

  const handleScrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (el.tagName === "H2") setActiveSectionId(id);
    }
  };

  return (
    <aside className="hidden xl:block w-84 fixed right-0 top-20 pr-10">
      <div className="bg-white rounded-xl shadow-2xl p-4 border sticky top-20 max-h-[80vh] overflow-auto">
        <h2 className="text-sm font-semibold text-[#0E09B4] mb-4">
          On this page
        </h2>

        <div className="space-y-2">
          {toc.map((section) =>
            activeSectionId === section.id ? (
              <div key={section.id}>
                <button
                  onClick={handleScrollTo(section.id)}
                  className="block text-left text-sm font-semibold w-full mb-1 text-black cursor-pointer hover:underline"
                >
                  {section.label}
                </button>
                <div className="pl-4 space-y-1">
                  {section.subTopics.map((sub) => (
                    <button
                      key={sub.id}
                      onClick={handleScrollTo(sub.id)}
                      className="block text-sm text-gray-600 hover:text-black hover:underline text-left w-full cursor-pointer"
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </aside>
  );
}
