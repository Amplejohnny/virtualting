import { useLocation } from "react-router-dom";
import { sidebarItems } from "./sidebar/sidebarItems";
import MascotImage from "../assets/mascot.png";
import Logo from "../assets/logo-sidebar.png";
import { HiMenu, HiX } from "react-icons/hi";
import { useMobileMenu } from "../context/MobileMenuContext";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname + location.hash;
  const { isOpen, toggleMenu } = useMobileMenu();

  const activeSection = sidebarItems.find((section) => {
    if (pathname === section.href) return true;
    return section.children?.some((child) => pathname === child.href);
  });

  return (
    <div className="relative px-5 pt-6">
      <header className="bg-white shadow-2xl rounded-xl px-4 md:px-12 flex items-center justify-between max-w-2xl top-0">
        {/* Mobile Logo - Only visible on mobile */}
        <div className="flex md:hidden items-center">
          <img src={Logo} alt="Virtualting Logo" className="h-12 w-auto" />
        </div>

        {/* Desktop Content - Hidden on mobile */}
        <div className="hidden md:block py-6 md:py-8">
          {/* Section label */}
          <p className="text-xl text-gray-900">
            {activeSection?.label ?? "Documentation"}
          </p>

          {/* Page title */}
          <h1 className="text-4xl font-bold text-[#0E09B4] leading-tight">
            Virtualting Model
          </h1>
        </div>

        {/* Desktop Mascot - Hidden on mobile */}
        <div className="hidden md:block">
          <img
            src={MascotImage}
            alt="Mascot"
            className="h-35 w-auto object-contain"
          />
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          {isOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </header>
    </div>
  );
}
