import React, { useEffect } from "react";
import PatientCard from "@/components/patients/PatientCard";
import { PatientDataType } from "../../types/Patient";
import usePatientsStore from "@/store/usePatientsStore";
import { CheckCircle2 } from "lucide-react";

interface PatientListItemsProps {
  patients: PatientDataType[];
  onSelectPatient: (patient: PatientDataType) => void;
}

const PatientListItems = ({
  patients,
  onSelectPatient,
}: PatientListItemsProps) => {
  const { selectedPatient } = usePatientsStore();
  const selectedPatientKey = `${selectedPatient?.name}-${selectedPatient?.date_of_birth}`;

  if (patients.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No patients found.</p>;
  }

  return (
    <ul className="flex flex-col w-full" role="list">
      {patients.map((patient, index) => {
        const uniqueKey = `${patient.name}-${patient.date_of_birth}`;
        const isSelected = uniqueKey === selectedPatientKey;

        return (
          <li
            key={uniqueKey}
            onClick={() => onSelectPatient(patient)}
            role="listitem"
          >
            <PatientCard
              profile_picture={patient.profile_picture}
              name={patient.name}
              gender={patient.gender}
              age={patient.age}
              isSelected={isSelected}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PatientListItems;
