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
      className={`${className} flex flex-col flex-1 bg-yellow-200 xl:rounded-[16px] p-5`}
    >
      <SearchPatients className="mb-10 mr-5" />

      {/* This div now only uses flex-1 for height control */}
      <div className="flex-1 overflow-y-auto bg-red-500">
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <p>Loading...</p>
          </div>
        ) : (
          <p>YeA!!!!!!!</p>
        )}
      </div>
    </div>
  );
};

export default PatientsList;
