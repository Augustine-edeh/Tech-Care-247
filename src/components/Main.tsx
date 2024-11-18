"use client";

import useActiveTabStore from "@/store/useActiveTabStore";
import PatientsList from "./PatientsList";
import PatientDiagnosisInfo from "./PatientDiagnosisInfo";
import PatientCard from "./PatientCard";
import PatientProfile from "./PatientProfile";

const Main = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);

  return (
    <main className="flex flex-1 h-screen bg-blue-200 overflow-hidden">
      <div className="w-full xl:hidden">
        {activeTab === "patients" && (
          <PatientsList />

          // <PatientsList className={"order-1 flex-1 xl:block xl:col-span-3"} />
        )}

        {activeTab === "overview" && (
          <PatientDiagnosisInfo />

          // <PatientsList className={"order-1 flex-1 xl:block xl:col-span-3"} />
        )}

        {activeTab === "diagnosis" && (
          <PatientProfile />
          // <PatientsList className={"order-1 flex-1 xl:block xl:col-span-3"} />
        )}
      </div>
    </main>
  );
};

export default Main;
