"use client";

import useActiveTabStore from "@/store/useActiveTabStore";
import PatientsList from "./PatientsList";
import PatientDiagnosisInfo from "./PatientDiagnosisInfo";
import PatientCard from "./PatientCard";

const Main = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);

  return (
    <main className="flex flex-1 h-screen bg-blue-200 overflow-hidden">
      {activeTab === "patients" && (
        <PatientsList className={""} />

        // <PatientsList className={"order-1 flex-1 xl:block xl:col-span-3"} />
      )}

      {activeTab === "overview" && (
        <PatientDiagnosisInfo />

        // <PatientsList className={"order-1 flex-1 xl:block xl:col-span-3"} />
      )}

      {activeTab === "diagnosis" && (
        <PatientCard />

        // <PatientsList className={"order-1 flex-1 xl:block xl:col-span-3"} />
      )}
    </main>
  );
};

export default Main;
