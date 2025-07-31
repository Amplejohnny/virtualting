import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { sidebarItems } from "./sidebarItems";
import Logo from "../../assets/logo-sidebar.png";
import { useMobileMenu } from "../../context/MobileMenuContext";
import { useLoading } from "../../context/LoadingContext";

export default function Sidebar() {
  const location = useLocation();
  const pathnameWithHash = location.pathname + location.hash;
  const { isOpen, closeMenu } = useMobileMenu();
  const { showLoading, hideLoading } = useLoading();

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
    showLoading();

    // Navigate to the new URL
    window.location.href = href;

    // Hide loading after a short delay or when the page loads
    const hideTimeout = setTimeout(hideLoading, 1000);
    window.addEventListener(
      "load",
      () => {
        clearTimeout(hideTimeout);
        hideLoading();
      },
      { once: true }
    );

    closeMenu();
  };

  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transform transition-transform duration-200 ease-in-out fixed top-0 left-0 h-screen w-64 bg-[#0A2A73] text-white z-40 md:z-30 flex flex-col`}
    >
      {/* Logo wrapper - Only visible on desktop */}
      <div className="hidden md:flex bg-white px-2 py-4 mb-4 items-center justify-center shadow-sm">
        <img src={Logo} alt="Virtualting Logo" className="w-[140px] h-auto" />
      </div>

      <div className="flex-1 overflow-y-auto sidebar-scroll">
        <nav className="space-y-3 px-4 pt-4 md:pt-0 pb-20">
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

                {isOpen && item.children && (
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
