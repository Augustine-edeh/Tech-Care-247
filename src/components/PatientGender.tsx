import Image from "next/image";

const PatientGender = () => {
  return (
    <div className="flex gap-x-4">
      <Image src={`/FemaleIcon.svg`} width={42} height={42} alt="gender icon" />

      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">
          Gender
        </p>
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">{`Female`}</p>
      </div>
    </div>
  );
};

export default PatientGender;
