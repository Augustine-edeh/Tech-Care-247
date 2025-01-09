"use client";

import { useRouter, usePathname } from "next/navigation";
import { Home, Calendar, Newspaper } from "lucide-react";
import useActiveTabStore from "@/store/useActiveTabStore";

const BottomNav = () => {
  const setActiveTab = useActiveTabStore((state) => state.setActiveTab);

  const router = useRouter();
  const currentPath = usePathname(); // Get the current route path

  // Function to handle navigation
  const navigateTo = (path: string) => {
    router.push(`/${path}`); // Navigate to the specified path
  };

  const navItems = [
    { icon: Home, label: "Home", path: "" },
    { icon: Calendar, label: "Schedule", path: "schedule" },
    { icon: Newspaper, label: "News", path: "news" },
  ];

  return (
    <nav className="xl:hidden bg-white border-t py-2">
      <div className="flex justify-around">
        {navItems.map(({ icon: Icon, label, path }) => (
          <button
            key={label}
            className={`p-3 flex flex-col items-center ${
              currentPath === `/${path}`
                ? "text-blue-600 font-bold"
                : "text-gray-400 hover:text-blue-600"
            }`}
            onClick={() => {
              navigateTo(path);

              if (path === "schedule") {
                // setActiveTab("schedule");
              }
            }}
            aria-label={label}
          >
            <Icon className="size-5" />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
