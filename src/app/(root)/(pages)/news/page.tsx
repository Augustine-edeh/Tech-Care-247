"use client";

import NewsFeed from "@/components/news/NewsFeed";
import Clock from "@/components/ui/Clock";

import PatientDiagnosisInfo from "@/components/patients/PatientDiagnosisInfo";
import PatientProfile from "@/components/patients/PatientProfile";
import PatientsList from "@/components/patients/PatientsList";
import useActiveTabStore from "@/store/useActiveTabStore";

const NewsPage = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);

  return (
    <>
      <main className="flex flex-1 h-screen overflow-hidden">
        {/* Mobile view */}
        <div className="w-full xl:hidden">
          <div className="flex items-center justify-between">
            <h3 className="font-manrope font-bold text-2xl leading-8 text-unnamed-color-072635">
              News Feed
            </h3>

            <Clock className="p-0" hasLabel={false} />
          </div>
          <NewsFeed />

          {/* <Clock />
          <NewsFeed /> */}
        </div>

        {/* Desktop View */}
        <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
          <div className="col-span-3 overflow-hidden rounded-2xl bg-unnamed-color-ffffff">
            <PatientsList />
          </div>
          <div className="col-span-6 overflow-hidden rounded-2xl">
            <NewsFeed />
          </div>
          <div className="col-span-3 overflow-hidden rounded-2xl">
            <Clock />
          </div>
        </div>
      </main>
    </>
  );
};

export default NewsPage;
