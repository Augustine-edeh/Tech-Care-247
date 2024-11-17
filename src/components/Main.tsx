"use client";

import useActiveTabStore from "@/store/useActiveTabStore";
import PatientDiagnosisInfo from "./PatientDiagnosisInfo";
import PatientProfile from "./PatientProfile";
import PatientsList from "./PatientsList";

const Main = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);

  return (
    <main className="flex flex-1 bg-blue-200 overflow-y-auto">
      {activeTab === "patients" && (
        <PatientsList className={"order-1 xl:block xl:col-span-3"} />
      )}
    </main>
  );
};

export default Main;
