"use client";

import { useRouter } from "next/navigation";
import { Users, Calendar, Newspaper } from "lucide-react";

const BottomNav = () => {
  const router = useRouter();

  // Function to handle navigation
  const navigateTo = (path: string) => {
    router.push(`/${path.toLowerCase()}`); // Navigate to the specified path
  };

  return (
    <nav className="xl:hidden bg-white border-t py-2">
      <div className="flex justify-around">
        {[
          { icon: Users, label: "Patients", path: "/" },
          { icon: Calendar, label: "Schedule", path: "/" },
          { icon: Newspaper, label: "News", path: "news" },
        ].map(({ icon: Icon, label, path }) => (
          <button
            key={label}
            className="p-3 text-gray-400 hover:text-blue-600 flex flex-col items-center"
            onClick={() => navigateTo(path)} // Pass as an arrow function
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
