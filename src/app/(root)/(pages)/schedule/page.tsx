"use client";

import NewsFeed from "@/components/news/NewsFeed";
import Clock from "@/components/ui/Clock";
import PatientDiagnosisInfo from "@/components/patients/PatientDiagnosisInfo";
import PatientProfile from "@/components/patients/PatientProfile";
import PatientsList from "@/components/patients/PatientsList";
import useActiveTabStore from "@/store/useActiveTabStore";
import { usePathname } from "next/navigation";

const SchedulePage = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);
  const pathname = usePathname();
  const isRootRoute = pathname === "/";

  return (
    <>
      <main className="flex flex-1 h-screen overflow-hidden">
        {/* Mobile View */}
        <div className="flex flex-col gap-5 w-full xl:hidden bg-unnamed-color-ffffff p-5">
          <Clock className="p-0" />

          <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
            Schedule
          </h3>

          <div className="grid place-items-center flex-1">
            You have no schedule on your calendar.
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
          <div className="col-span-3 overflow-hidden rounded-2xl bg-unnamed-color-ffffff">
            <PatientsList />
          </div>
          <div className="col-span-6 overflow-hidden rounded-2xl">
            <PatientDiagnosisInfo />
          </div>
          <div className="col-span-3 overflow-hidden rounded-2xl">
            <Clock />
          </div>
        </div>
      </main>
    </>
  );
};

export default SchedulePage;
