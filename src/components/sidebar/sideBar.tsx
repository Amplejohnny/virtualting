import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { sidebarItems } from "./sidebarItems";
import Logo from "../../assets/Icon-V.png";

export default function Sidebar() {
  const location = useLocation();
  const pathnameWithHash = location.pathname + location.hash;

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Open the parent section of any active child on first load
    for (const item of sidebarItems) {
      if (item.children?.some((child) => pathnameWithHash === child.href)) {
        setOpenSections((prev) => ({ ...prev, [item.label]: true }));
        break;
      }
    }
  }, [pathnameWithHash]);

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleChildClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    window.location.href = href;
    //reload the second time to ensure the hash is processed correctly
    setTimeout(() => {
      e.preventDefault();
      window.location.reload();
    }, 100);
  };

  return (
    <aside className="sidebar-scroll hidden md:flex flex-col w-64 h-screen bg-[#0A2A73] text-white fixed top-0 left-0 overflow-y-auto z-30">
      {/* Logo wrapper */}
      <div className="bg-white px-4 py-6 mb-4 flex items-center justify-center shadow-sm">
        <img src={Logo} alt="Virtualting Logo" className="w-[120px] h-auto" />
      </div>

      <div className="flex-1 overflow-y-auto px-4 sidebar-scroll">
        <nav className="space-y-3 px-1">
          {sidebarItems.map((item) => {
            const isOpen = openSections[item.label] ?? false;
            const isParentActive = pathnameWithHash.startsWith(item.href);

            return (
              <div key={item.label}>
                <button
                  onClick={() => toggleSection(item.label)}
                  className={`w-full flex items-center justify-between px-2 py-2 rounded-md text-left cursor-pointer ${
                    isParentActive
                      ? "bg-blue-700 font-semibold"
                      : "hover:bg-blue-600"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.icon} {item.label}
                  </span>
                  {item.children &&
                    (isOpen ? (
                      <RiArrowDropUpLine size={20} />
                    ) : (
                      <RiArrowDropDownLine size={20} />
                    ))}
                </button>

                {item.children && isOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => {
                      const isActive = pathnameWithHash === child.href;
                      return (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={(e) => handleChildClick(e, child.href)}
                          className={`block text-sm px-2 py-[6px] rounded-md ${
                            isActive
                              ? "bg-blue-500 font-medium"
                              : "hover:bg-blue-700"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
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
