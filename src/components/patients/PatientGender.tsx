"use client";

import usePatientsStore from "@/store/usePatientsStore";
import Image from "next/image";

const PatientGender = () => {
  const gender = usePatientsStore((state) => state.selectedPatient)?.gender;

  return (
    <div className="flex gap-x-4">
      <Image src={`/FemaleIcon.svg`} width={42} height={42} alt="gender icon" />

      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-5 text-unnamed-color-072635 text-left capitalize">
          Gender
        </p>
        <p className="font-manrope font-bold text-sm leading-5 text-unnamed-color-072635 text-left capitalize">{`${gender}`}</p>
      </div>
    </div>
  );
};

export default PatientGender;
