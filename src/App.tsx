import { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar/sideBar";
import TableOfContents from "./components/sticky-toc";
import { useTOCContext } from "./context/TOCContext";

export default function App({ children }: { children: React.ReactNode }) {
  const { setActiveSectionId } = useTOCContext();

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2"));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSectionId(visible.target.id);
        }
      },
      {
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.4,
      }
    );

    headings.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [setActiveSectionId]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header />
        <main
          id="doc-content"
          className="flex-1 px-6 py-8 max-w-5xl relative pr-[270px] z-0 overflow-y-auto"
        >
          {children}
        </main>
        <Footer />
      </div>
      <TableOfContents />
    </div>
  );
}
