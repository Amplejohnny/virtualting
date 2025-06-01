// src/context/TOCContext.tsx
import { createContext, useContext, useState } from "react";

interface TOCContextType {
  activeSectionId: string;
  setActiveSectionId: (id: string) => void;
}

const TOCContext = createContext<TOCContextType | undefined>(undefined);

export function TOCProvider({ children }: { children: React.ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState("");

  return (
    <TOCContext.Provider value={{ activeSectionId, setActiveSectionId }}>
      {children}
    </TOCContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTOC() {
  const context = useContext(TOCContext);
  if (!context) throw new Error("useTOC must be used within a TOCProvider");
  return context;
}
