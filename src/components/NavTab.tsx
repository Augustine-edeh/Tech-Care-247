import { useState } from "react";
import { NAV_TABS } from "@/data/navigation";

const NavTab = () => {
  const [activeTab, setActiveTab] =
    useState<(typeof NAV_TABS)[number]>("patients");

  return (
    <div className="lg:hidden flex bg-unnamed-color-ffffff border-y">
      {NAV_TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === tab.toLowerCase()
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          } capitalize`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default NavTab;
