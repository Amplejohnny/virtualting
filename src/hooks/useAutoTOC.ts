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
    let isMounted = true;

    const buildTOC = () => {
      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`Container with ID "${containerId}" not found.`);
        return;
      }

      const headings = Array.from(
        container.querySelectorAll<HTMLElement>("h2, h3")
      );
      const tocSections: TOCSection[] = [];
      let currentSection: TOCSection | null = null;

      for (const el of headings) {
        const id = el.id || el.innerText.toLowerCase().replace(/\s+/g, "-");
        el.id = id;

        if (el.tagName === "H2") {
          currentSection = { id, label: el.innerText, subTopics: [] };
          tocSections.push(currentSection);
        } else if (el.tagName === "H3" && currentSection) {
          currentSection.subTopics.push({ id, label: el.innerText });
        }
      }

      if (isMounted) {
        setTOC(tocSections);
        console.debug("TOC updated:", tocSections);
      }
    };

    // Retry mechanism to wait for DOM to load
    const attemptBuildTOC = () => {
      if (document.getElementById(containerId)) {
        buildTOC();
      } else {
        console.debug(`Retrying to find container "${containerId}"...`);
        setTimeout(attemptBuildTOC, 100); // Retry every 100ms
      }
    };

    attemptBuildTOC();

    // Observe DOM changes
    const container = document.getElementById(containerId);
    if (container) {
      const observer = new MutationObserver(() => {
        if (isMounted) buildTOC();
      });
      observer.observe(container, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
        isMounted = false;
      };
    }

    return () => {
      isMounted = false;
    };
  }, [containerId]);

  return toc;
}
