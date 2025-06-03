import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { SectionType } from "../data/introduction-docs";

export function useSectionNavigator(sections: SectionType[]) {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = useMemo(() => {
    const hash = location.hash.replace("#", "");
    const foundIndex = sections.findIndex((sec) => sec.id === hash);
    return foundIndex === -1 ? 0 : foundIndex;
  }, [location.hash, sections]);

  const current = sections[currentIndex];

  const goTo = (index: number) => {
    if (index >= 0 && index < sections.length) {
      navigate(sections[index].href);
    }
  };

  return { current, currentIndex, goTo };
}
