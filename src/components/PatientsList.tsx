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
    <section
      className={`${className} bg-unnamed-color-ffffff w-[367p w- full h-[1076px h-[full mt-[14px] rounded-[16px] p-5 pr -1 pb -20 overflow-hidde`}
    >
      <SearchPatients className="mb-10 mr-5" />

      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <p>Loading...</p>
        </div>
      ) : (
        <ul className="patient-list flex flex-col gap-y- h-fu  overflow-y-scroll h-[1076px] overflow-x-hidden w-full">
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
      )}
    </section>
  );
};

export default PatientsList;
