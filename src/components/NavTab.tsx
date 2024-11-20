import { useState } from "react";
import { NAV_TABS } from "@/data/navigation";
import useActiveTabStore from "@/store/useActiveTabStore";

const NavTab = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);
  const setActiveTab = useActiveTabStore((state) => state.setActiveTab);

  return (
    <div className="xl:hidden flex bg-unnamed-color-ffffff border-y">
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
