"use client";

import { useEffect } from "react";
import PatientCard from "./PatientCard";
import SearchPatients from "./SearchPatients";
import usePatientsStore from "@/store/usePatientsStore";
import { ClassNameType } from "../../types/Ui";

const PatientsList = ({ className }: ClassNameType) => {
  const patients = usePatientsStore((state) => state.patients);
  const isLoading = usePatientsStore((state) => state.isLoading);
  const fetchPatientsData = usePatientsStore(
    (state) => state.fetchPatientsData
  );
  const setSelectedPatient = usePatientsStore(
    (state) => state.setSelectedPatient
  );

  useEffect(() => {
    fetchPatientsData(); // Fetch patients data on component mount
  }, [fetchPatientsData]);

  return (
    <div
      className={`${className} flex flex-1 flex-col h-full bg-yellow-200 xl:rounded-2xl p-5`}
    >
      {/* Fixed Search Bar */}
      <div className="mb-5">
        <SearchPatients />
      </div>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto bg-red-500">
        {
          isLoading ? (
            <div className="flex justify-center items-center h-full">
              <p>Loading...</p>
            </div>
          ) : (
            // <ul className="bg-pink-400 p-2 overflow-y -auto min-h-full">
            //   {Array.from({ length: 100 }).map((_, index) => (
            //     <p key={index} className="bg-[#f5f5dc]">
            //       {index + 1}
            //     </p>
            //   ))}
            // </ul>

            <ul className="patient-list flex flex-col overflow-y-scroll h- [1076px] w-full">
              {patients?.map((patient, index) => (
                <li key={index} onClick={() => setSelectedPatient(patient)}>
                  <PatientCard
                    profile_picture={patient.profile_picture}
                    name={patient.name}
                    gender={patient.gender}
                    age={patient.age}
                  />
                </li>
              ))}
            </ul>
          )

          // (
          //   <ul className="patient-list flex flex-col overflow-y-scroll h- [1076px] w-full">
          //     {patients?.map((patient, index) => (
          //       <li key={index} onClick={() => setSelectedPatient(patient)}>
          //         <PatientCard
          //           profile_picture={patient.profile_picture}
          //           name={patient.name}
          //           gender={patient.gender}
          //           age={patient.age}
          //         />
          //       </li>
          //     ))}
          //   </ul>
          // )
        }
      </div>
    </div>
  );
};

export default PatientsList;
