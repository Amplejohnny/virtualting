import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar/sideBar";
import TableOfContents from "./components/sticky-toc";
import { useTOCContext } from "./context/TOCContext";
import { MobileMenuProvider } from "./context/MobileMenuContext";
import { LoadingProvider } from "./context/LoadingContext";

export default function App({ children }: { children: React.ReactNode }) {
  const { setActiveSectionId } = useTOCContext();
  const location = useLocation();

  // Handle intersection observer for TOC
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

  // Handle scroll position on navigation
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash) {
      // Wait for the header to be rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight + 56 : 120; // 24px (pt-6) + 30px padding + 2px (border-radius)
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.scrollY - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <LoadingProvider>
      <MobileMenuProvider>
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 md:ml-64 flex flex-col">
            <Header />
            <main
              id="doc-content"
              className="flex-1 px-5 md:px-6 py-6 md:py-8 max-w-5xl relative md:pr-[270px] z-0 overflow-y-auto"
            >
              {children}
            </main>
            <Footer />
          </div>
          <TableOfContents />
        </div>
      </MobileMenuProvider>
    </LoadingProvider>
  );
}
