"use client";

import { useRouter, usePathname } from "next/navigation";
import { Users, Calendar, Newspaper } from "lucide-react";

const BottomNav = () => {
  const router = useRouter();
  const currentPath = usePathname(); // Get the current route path

  // Function to handle navigation
  const navigateTo = (path: string) => {
    router.push(`/${path}`); // Navigate to the specified path
  };

  const navItems = [
    { icon: Users, label: "Patients", path: "/" },
    { icon: Calendar, label: "Schedule", path: "/" },
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
            onClick={() => navigateTo(path)}
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
