import { useEffect, useState } from "react";

export default function useVisibleHeading(ids: string[]) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const index = ids.indexOf(visible.target.id);
          if (index !== -1) setActiveIndex(index);
        }
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.5,
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeIndex;
}
