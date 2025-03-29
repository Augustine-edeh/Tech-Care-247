"use client";

import Image from "next/image";
import PatientDOB from "./PatientDOB";
import PatientGender from "./PatientGender";
import PatientContactInfo from "./PatientContactInfo";
import PatientEmergencyContact from "./PatientEmergencyContact";
import PatientInsuranceProvider from "./PatientInsuranceProvider";
import LabResults from "./LabResults";
import usePatientsStore from "@/store/usePatientsStore";
import { ClassNameType } from "../../../types/Ui";
import DiagnosticListTable from "./DiagnosticListTable";

const PatientProfile = ({ className }: ClassNameType) => {
  const profile_picture = usePatientsStore(
    (state) => state.selectedPatient?.profile_picture
  );
  const patientName = usePatientsStore((state) => state.selectedPatient?.name);

  return (
    <div
      className={`${className} flex flex-1 flex-col h-full xl:rounded-2xl gap-5`}
    >
      {/* Mobile view */}
      <div className="xl:hidden flex flex-col gap-5 overflow-auto p-5">
        <div>
          <DiagnosticListTable />
        </div>

        <div>
          <LabResults />
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden xl:flex flex-col gap-6 h-full">
        <section className="bg-unnamed-color-ffffff rounded-2xl p-5 h-4/5">
          <div className="flex flex-col items-center gap-y-6">
            <Image
              src={`${
                profile_picture
                  ? profile_picture
                  : "/defaulat-profile-image.png"
              }`}
              width={200}
              height={200}
              alt={`profile-photo`}
            />
            <h3 className="font-manrope font-extrabold text-3xl leading-33 text-unnamed-color-072635">
              {patientName ? patientName : "-- --"}
            </h3>
          </div>
          <ul className="hidden lg:flex flex-col gap-y-4 mt-7">
            <PatientDOB />
            <PatientGender />
            <PatientContactInfo />
            {/* <PatientEmergencyContact /> */}
            <PatientInsuranceProvider />
          </ul>
          <div className="flex justify-center items-center mt-5">
            <button className="px-5 py-3 rounded-[41px] bg-unnamed-activestate-bg-1 font-manrope font-bold text-base leading-5 text-unnamed-color-072635">
              Show All Information
            </button>
          </div>
        </section>

        <LabResults className="h-1/5 overflow-hidden" />
      </div>
    </div>
  );
};

export default PatientProfile;
