"use client";

import useActiveTabStore from "@/store/useActiveTabStore";
import PatientDiagnosisInfo from "./PatientDiagnosisInfo";
import PatientProfile from "./PatientProfile";
import PatientsList from "./PatientsList";

const Main = () => {
  const activeTab = useActiveTabStore((state) => state.activeTab);

  return (
    <main className="flex flex-1 bg-blue-200 overflow-y-auto">
      {/* {activeTab === "patients" && (
        <ul>
          {Array.from({ length: 50 }, () => "patient").map((el, index) => (
            <li key={index}>{`${el} ${++index}`}</li>
          ))}
        </ul>
      )} */}

      {activeTab === "patients" && (
        <PatientsList className={"order-1 xl:block xl:col-span-3"} />
      )}

      {/* <div className="xl: hidden">
        {activeTab === "patients" && (
          <PatientsList className={"order-1 xl:block xl:col-span-3"} />
        )}

        {activeTab === "overview" && (
          <PatientDiagnosisInfo
            className={"order-2 lg:order-2 lg:col-span-8 xl:col-span-6"}
          />
        )}

        {activeTab === "diagnosis" && (
          <PatientProfile
            className={
              "order-1 lg:order-3 lg:col-span-4 xl:order-3 xl:col-span-3"
            }
          />
        )}
      </div>

      <div className="hidden xl:grid grid-cols-1 xl:grid-cols-12 gap-8 lg:border-red-600 lg:grid-cols-12">
        <PatientsList className={"hidden order-1 xl:block xl:col-span-3"} />
        <PatientDiagnosisInfo
          className={"order-2 lg:order-2 lg:col-span-8 xl:col-span-6"}
        />
        <PatientProfile
          className={
            "order-1 lg:order-3 lg:col-span-4 xl:order-3 xl:col-span-3"
          }
        />
      </div> */}
    </main>
  );
};

export default Main;
