"use client";

import Image from "next/image";
import PatientCard from "./PatientCard";
import SearchPatients from "./SearchPatients";
import { patientsArray } from "@/data/patientsArray";
import { ClassNameType } from "../../types/Ui";
import { useEffect } from "react";
import useStore from "@/store/patientsStore";

const PatientsList = ({ className }: ClassNameType) => {
  useEffect(() => {}, []);

  // Zustand state for `PatientsData`
  const PatientsData = useStore((state: any) => state.setPatientsData);

  return (
    <section
      className={`${className} bg-unnamed-color-ffffff w-[367p w- full h-[1076px h-[full mt-[14px] rounded-[16px] p-5 pr -1 pb -20 overflow-hidde`}
    >
      <SearchPatients className="mb-10 mr-5" />

      <ul className="patient-list flex flex-col gap-y- h-fu  overflow-y-scroll h-[1076px] overflow-x-hidden w-full">
        {patientsArray.map((patient, index) => (
          <li key={index}>
            <PatientCard
              profile_picture={patient.profile_picture}
              name={patient.name}
              gender={patient.gender}
              age={patient.age}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PatientsList;
