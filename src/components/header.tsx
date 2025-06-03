import { useLocation } from "react-router-dom";
import { sidebarItems } from "./sidebar/sidebarItems";
import MascotImage from "../assets/mascot.png";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname + location.hash;

  const activeSection = sidebarItems.find((section) => {
    if (pathname === section.href) return true;
    return section.children?.some((child) => pathname === child.href);
  });

  return (
    <div className="relative px-5 pt-6">
      <header className="bg-white shadow-2xl rounded-xl px-12 flex items-center justify-between max-w-2xl top-0">
        <div className="py-6 md:py-8">
          {/* Section label */}
          <p className="text-xl text-gray-900">
            {activeSection?.label ?? "Documentation"}
          </p>

          {/* Page title */}
          <h1 className="text-4xl font-bold text-[#0E09B4] leading-tight">
            Virtualting Model
          </h1>
        </div>

        <div>
          <img
            src={MascotImage}
            alt="Mascot"
            className="h-35 w-auto object-contain"
          />
        </div>
      </header>
    </div>
  );
}
