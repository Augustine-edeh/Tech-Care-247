"use client";

import useActiveTabStore from "@/store/useActiveTabStore";
import PatientsList from "./PatientsList";

const Main = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);

  return (
    <main className="flex flex-1 h-screen bg-blue-200 overflow-hidden">
      {activeTab === "patients" && <PatientsList />}
    </main>
  );
};

export default Main;
