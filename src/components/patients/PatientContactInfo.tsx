"use client";

import usePatientsStore from "@/store/usePatientsStore";
import Image from "next/image";

Image;
const PatientContactInfo = () => {
  const phone_number = usePatientsStore(
    (state) => state.selectedPatient?.phone_number
  );

  return (
    <div className="flex gap-x-4">
      <Image src={`/PhoneIcon.svg`} width={42} height={42} alt="phone icon" />

      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">
          Contact Info
        </p>
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">{`${phone_number}`}</p>
      </div>
    </div>
  );
};

export default PatientContactInfo;
