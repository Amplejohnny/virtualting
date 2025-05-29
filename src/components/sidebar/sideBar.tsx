// components/Sidebar/Sidebar.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { sidebarItems } from "./sidebarItems";
import Logo from "../../assets/Icon-V.png";

export default function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname + location.hash;
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="sidebar-scroll hidden md:flex flex-col w-64 h-screen bg-[#0A2A73] text-white fixed top-0 left-0 overflow-y-auto z-30">
      {/* Logo wrapper with white background */}
      <div className="bg-white px-4 py-6 mb-4 flex items-center justify-center shadow-sm">
        <img src={Logo} alt="Virtualting Logo" className="w-[120px] h-auto" />
      </div>

      {/* Navigation section (still blue) */}
      <div className="flex-1 overflow-y-auto px-4 sidebar-scroll">
      <nav className="space-y-3 px-1">
        {sidebarItems.map((item) => {
          const isOpen = openSections[item.label] ?? false;
          const isActive = pathname.startsWith(item.href);

          return (
            <div key={item.label}>
              <button
                className={`w-full flex items-center justify-between px-2 py-2 rounded-md text-left ${
                  isActive ? "bg-blue-700 font-semibold" : "hover:bg-blue-600"
                }`}
                onClick={() => toggleSection(item.label)}
              >
                <span className="flex items-center gap-2">
                  {item.icon} {item.label}
                </span>
                {item.children ? (
                  isOpen ? (
                    <RiArrowDropUpLine size={20} />
                  ) : (
                    <RiArrowDropDownLine size={20} />
                  )
                ) : null}
              </button>

              {item.children && isOpen && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className={`block text-sm px-2 py-[6px] rounded-md ${
                        pathname === child.href
                          ? "bg-blue-500 font-medium"
                          : "hover:bg-blue-700"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      </div>
    </aside>
  );
}
