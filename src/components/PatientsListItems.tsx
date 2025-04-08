import React, { useEffect } from "react";
import PatientCard from "@/components/patients/PatientCard";
import { PatientDataType } from "../../types/Patient";

interface PatientListItemsProps {
  patients: PatientDataType[];
  onSelectPatient: (patient: PatientDataType) => void;
}

const PatientListItems = ({
  patients,
  onSelectPatient,
}: PatientListItemsProps) => {
  if (patients.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No patients found.</p>;
  }

  return (
    <ul className="flex flex-col w-full" role="list">
      {patients.map((patient, index) => (
        <li
          key={index}
          onClick={() => onSelectPatient(patient)}
          role="listitem"
        >
          <PatientCard
            profile_picture={patient.profile_picture}
            name={patient.name}
            gender={patient.gender}
            age={patient.age}
          />
        </li>
      ))}
    </ul>
  );
};

export default PatientListItems;
