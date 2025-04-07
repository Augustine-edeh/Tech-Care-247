"use client";

import { useEffect, useState } from "react";
import PatientCard from "./PatientCard";
import SearchPatients from "../ui/SearchPatients";
import usePatientsStore from "@/store/usePatientsStore";
import { ClassNameType } from "../../../types/Ui";
import { PatientDataType } from "../../../types/Patient";

const PatientsList = ({ className }: ClassNameType) => {
  const { patients, isLoading, error, fetchPatientsData, setSelectedPatient } =
    usePatientsStore((state) => ({
      patients: state.patients,
      isLoading: state.isLoading,
      error: state.error,
      fetchPatientsData: state.fetchPatientsData,
      setSelectedPatient: state.setSelectedPatient,
    }));

  const [filteredPatients, setFilteredPatients] = useState(patients);

  useEffect(() => {
    if (patients.length === 0) {
      fetchPatientsData();
    }
  }, [patients.length, fetchPatientsData]);

  useEffect(() => {
    // Reset the filtered list when the patients list changes
    setFilteredPatients(patients);
  }, [patients]);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredPatients(patients); // Show all patients if search query is empty
    } else {
      const results = patients.filter((patient) =>
        patient.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPatients(results);
    }
  };

  return (
    <div
      className={`${className} flex flex-1 flex-col h-full xl:rounded-2xl p-5`}
    >
      <div className="bg-unnamed-color-ffffff flex flex-1 flex-col h-full rounded-2xl xl:rounded-none p-3 xl:p-0">
        {/* Fixed Search Bar */}
        <div className="mb-5">
          <SearchPatients onSearch={handleSearch} />
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
            <ul className="flex flex-col w-full" role="list">
              {filteredPatients.map((patient: PatientDataType, index) => (
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
              {filteredPatients.length === 0 && (
                <p className="text-center text-gray-500 mt-4">
                  No patients found.
                </p>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientsList;
