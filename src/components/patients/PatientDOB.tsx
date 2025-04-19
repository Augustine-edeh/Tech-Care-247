"use client";

import Image from "next/image";
import usePatientsStore from "@/store/usePatientsStore";

const PatientDOB = () => {
  const d_o_b = usePatientsStore(
    (state) => state.selectedPatient?.date_of_birth
  );

  // Optional: Format the date
  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="flex gap-x-4">
      <Image src="/BirthIcon.svg" width={42} height={42} alt="birth icon" />
      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-5 text-unnamed-color-072635 text-left capitalize">
          Date of Birth
        </p>
        <p className="font-manrope font-bold text-sm leading-5 text-unnamed-color-072635 text-left capitalize">
          {formatDate(d_o_b)}
        </p>
      </div>
    </div>
  );
};

export default PatientDOB;
