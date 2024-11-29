"use client";

import usePatientsStore from "@/store/usePatientsStore";
import Image from "next/image";

const PatientEmergencyContact = () => {
  const emergency_contact = usePatientsStore(
    (state) => state.selectedPatient?.emergency_contact
  );
  return (
    <div className="flex gap-x-4">
      <Image src={`/PhoneIcon.svg`} width={42} height={42} alt="phone icon" />

      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-5 text-unnamed-color-072635 text-left capitalize">
          Emergency Contacts
        </p>
        <p className="font-manrope font-bold text-sm leading-5 text-unnamed-color-072635 text-left capitalize">
          {`${emergency_contact}`}
        </p>
      </div>
    </div>
  );
};

export default PatientEmergencyContact;
