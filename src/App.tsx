import Footer from "./components/footer";
import Header from "./components/header";
import Sidebar from "./components/sidebar/sideBar";
import TableOfContents from "./components/sticky-toc";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Header />
        <main
          id="doc-content"
          className="flex-1 px-6 py-8 max-w-4xl mx-auto relative pr-[260px]"
        >
          {children}
        </main>
        <Footer />
      </div>
      <TableOfContents />
    </div>
  );
}
