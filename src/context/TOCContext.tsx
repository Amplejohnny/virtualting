import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface TOCContextType {
  activeSectionId: string;
  setActiveSectionId: Dispatch<SetStateAction<string>>;
}

const TOCContext = createContext<TOCContextType | undefined>(undefined);

export function TOCProvider({ children }: { children: React.ReactNode }) {
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  return (
    <TOCContext.Provider value={{ activeSectionId, setActiveSectionId }}>
      {children}
    </TOCContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTOCContext() {
  const context = useContext(TOCContext);
  if (!context) {
    throw new Error("useTOCContext must be used within a TOCProvider");
  }
  return context;
}
