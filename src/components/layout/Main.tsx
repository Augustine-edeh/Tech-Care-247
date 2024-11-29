"use client";

import { usePathname } from "next/navigation";
import useActiveTabStore from "@/store/useActiveTabStore";
import PatientsList from "../patients/PatientsList";
import PatientDiagnosisInfo from "../patients/PatientDiagnosisInfo";
import PatientProfile from "../patients/PatientProfile";

const Main = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);
  const pathname = usePathname();

  // Synchronize active tab with root path
  const isRootRoute = pathname === "/";

  return (
    <main className="flex flex-1 h-screen overflow-hidden">
      {/* Mobile View */}
      <div className="w-full xl:hidden">
        {isRootRoute && activeTab === "patients" && <PatientsList />}

        {isRootRoute && activeTab === "overview" && <PatientDiagnosisInfo />}

        {isRootRoute && activeTab === "diagnosis" && <PatientProfile />}
      </div>

      {/* Desktop View */}
      <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
        <div className="col-span-3 overflow-hidden rounded-2xl bg-unnamed-color-ffffff">
          {isRootRoute && <PatientsList />}
        </div>
        <div className="col-span-6 overflow-hidden rounded-2xl">
          {isRootRoute && <PatientDiagnosisInfo />}
        </div>
        <div className="col-span-3 overflow-hidden rounded-2xl">
          {isRootRoute && <PatientProfile />}
        </div>
      </div>
    </main>
  );
};

export default Main;
