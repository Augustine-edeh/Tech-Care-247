"use client";

import usePatientsStore from "@/store/usePatientsStore";
import Image from "next/image";

Image;
const PatientInsuranceProvider = () => {
  const insurance_provider = usePatientsStore(
    (state) => state.selectedPatient?.insurance_type
  );

  return (
    <div className="flex gap-x-4">
      <Image
        src={`/InsuranceIcon.svg`}
        width={42}
        height={42}
        alt="insurance icon"
      />

      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-5 text-unnamed-color-072635 text-left capitalize">
          Insurance Provider
        </p>
        <p className="font-manrope font-bold text-sm leading-5 text-unnamed-color-072635 text-left capitalize">{`${insurance_provider}`}</p>
      </div>
    </div>
  );
};

export default PatientInsuranceProvider;
