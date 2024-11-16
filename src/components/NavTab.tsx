import { useState } from "react";

const NavTab = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="lg:hidden flex">
      {["Overview", "Patients", "Diagnosis"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab.toLowerCase())}
          className={`flex-1 py-3 text-sm font-medium ${
            activeTab === tab.toLowerCase()
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default NavTab;
