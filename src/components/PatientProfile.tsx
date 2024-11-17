"use client";

import Image from "next/image";
import PatientDOB from "./PatientDOB";
import PatientGender from "./PatientGender";
import PatientContactInfo from "./PatientContactInfo";
import PatientEmergencyContact from "./PatientEmergencyContact";
import PatientInsuranceProvider from "./PatientInsuranceProvider";
import LabResults from "./LabResults";
import usePatientsStore from "@/store/usePatientsStore";
import { ClassNameType } from "../../types/Ui";
import DiagnosticListTable from "./DiagnosticListTable";

const PatientProfile = ({ className }: ClassNameType) => {
  const profile_picture = usePatientsStore(
    (state) => state.selectedPatient?.profile_picture
  );
  const patientName = usePatientsStore((state) => state.selectedPatient?.name);

  // <div className={`${className} flex flex-col gap-8`}>
  //   <section className="bg-unnamed-color-ffffff min-w-[367px h-[760px rounded-[16px] p-5">
  //     <div className="flex flex-col items-center gap-y-6 mt-3 mb- mb-[29px]">
  //       <Image
  //         src={`${profile_picture ? profile_picture : "/null"}`}
  //         width={200}
  //         height={200}
  //         alt={`profile-photo`}
  //       />

  //       <h3 className="font-manrope font-extrabold text-3xl leading-[33px] text-unnamed-color-072635">{`${patientName}`}</h3>
  //     </div>

  //     <ul className="hidden lg:flex flex-col gap-y-6 my-[29px]">
  //       <PatientDOB />
  //       <PatientGender />
  //       <PatientContactInfo />
  //       <PatientEmergencyContact />
  //       <PatientInsuranceProvider />
  //     </ul>

  //     <div className=" text-center w-[300px] mx-auto">
  //       <button className="w-[220px] h-[41px] rounded-[41px] bg-unnamed-activestate-bg-1 font-manrope font-bold text-base leading-[19px] text-unnamed-color-072635 my-[11px]">
  //         Show All Information
  //       </button>
  //     </div>
  //   </section>

  //   <LabResults className="hidden lg:block" />
  // </div>

  return (
    <div
      className={`${className} flex flex-1 flex-col h-full bg-yellow-200 xl:rounded-2xl p-5 gap-5 overflow-y-auto`}
    >
      {/* <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Diagnostic List</h3>
        </div>
        <div className="divide-y">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="p-4">
              <h4 className="font-medium">Diagnosis {i + 1}</h4>
              <p className="text-sm text-gray-500 mt-1">
                Description of the diagnosis goes here...
              </p>
              <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-600">
                Status
              </span>
            </div>
          ))}
        </div>
      </div> */}

      <div>
        <DiagnosticListTable />
      </div>

      <div>
        <LabResults />
      </div>
    </div>
  );
};

export default PatientProfile;
