// hooks/useAutoTOC.ts
import { useEffect, useState } from "react";

export interface TOCSubTopic {
  id: string;
  label: string;
}

export interface TOCSection {
  id: string;
  label: string;
  subTopics: TOCSubTopic[];
}

export default function useAutoTOC(containerId: string = "doc-content") {
  const [toc, setTOC] = useState<TOCSection[]>([]);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const headings = Array.from(
      container.querySelectorAll<HTMLElement>("h2, h3")
    );

    const tocSections: TOCSection[] = [];
    let currentSection: TOCSection | null = null;

    for (const el of headings) {
      const id = el.id || el.innerText.toLowerCase().replace(/\s+/g, "-");
      el.id = id; // Ensure ID exists for scrolling

      if (el.tagName === "H2") {
        currentSection = {
          id,
          label: el.innerText,
          subTopics: [],
        };
        tocSections.push(currentSection);
      } else if (el.tagName === "H3" && currentSection) {
        currentSection.subTopics.push({
          id,
          label: el.innerText,
        });
      }
    }

    setTOC(tocSections);
  }, [containerId]);

  return toc;
}
