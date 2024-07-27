import Image from "next/image";

const PatientEmergencyContact = () => {
  return (
    <div className="flex gap-x-4">
      <Image src={`/PhoneIcon.svg`} width={42} height={42} alt="phone icon" />

      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">
          Emergency Contacts
        </p>
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">{`(415) 555-5678`}</p>
      </div>
    </div>
  );
};

export default PatientEmergencyContact;
