"use client";

import { useEffect } from "react";
import PatientCard from "./PatientCard";
import SearchPatients from "../ui/SearchPatients";
import usePatientsStore from "@/store/usePatientsStore";
import { ClassNameType } from "../../../types/Ui";

const PatientsList = ({ className }: ClassNameType) => {
  const { patients, isLoading, error, fetchPatientsData, setSelectedPatient } =
    usePatientsStore((state) => ({
      patients: state.patients,
      isLoading: state.isLoading,
      error: state.error,
      fetchPatientsData: state.fetchPatientsData,
      setSelectedPatient: state.setSelectedPatient,
    }));

  useEffect(() => {
    if (patients.length === 0) {
      fetchPatientsData();
    }
  }, [patients.length, fetchPatientsData]);

  return (
    <div
      className={`${className} flex flex-1 flex-col h-full xl:rounded-2xl p-5`}
    >
      <div className="bg-unnamed-color-ffffff flex flex-1 flex-col h-full rounded-2xl xl:rounded-none p-3 xl:p-0">
        {/* Fixed Search Bar */}
        <div className="mb-5">
          <SearchPatients />
        </div>
        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto">
          {isLoading ? (
            <div
              className="flex justify-center items-center h-full"
              aria-live="polite"
            >
              <p>Loading...</p>
            </div>
          ) : error ? (
            <div
              className="flex justify-center items-center h-full"
              aria-live="assertive"
            >
              <p className="text-red-500">Failed to load data: {error}</p>
            </div>
          ) : (
            <ul
              className="patient-list flex flex-col overflow-y-scroll w-full"
              role="list"
            >
              {patients.map((patient, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedPatient(patient)}
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
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientsList;
