"use client";

import Header from "@/components/layout/Header";
import PatientDiagnosisInfo from "@/components/patients/PatientDiagnosisInfo";
import PatientProfile from "@/components/patients/PatientProfile";
import PatientsList from "@/components/patients/PatientsList";
import useActiveTabStore from "@/store/useActiveTabStore";

const NewsLayout = ({ children }: { children: React.ReactNode }) => {
  const activeTab = useActiveTabStore((state) => state.activeTab);

  return (
    <main className="flex flex-1 h-screen overflow-hidden">
      {/* Mobile view */}
      {/* <div className="w-full xl:hidden">
        {activeTab === "patients" && <PatientsList />}

        {activeTab === "overview" && <PatientDiagnosisInfo />}

        {activeTab === "diagnosis" && <PatientProfile />}
      </div> */}

      {/* Desktop View */}
      <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
        <div className="col-span-3 overflow-hidden rounded-2xl bg-unnamed-color-ffffff">
          <PatientsList />
        </div>
        <div className="col-span-6 overflow-hidden rounded-2xl">
          <PatientDiagnosisInfo />
        </div>
        <div className="col-span-3 overflow-hidden rounded-2xl">
          <PatientProfile />
        </div>
      </div>
    </main>
  );
};

export default NewsLayout;
