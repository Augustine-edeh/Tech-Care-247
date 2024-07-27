import Image from "next/image";

const PatientDOB = () => {
  return (
    <div className="flex gap-x-4">
      <Image src={`/BirthIcon.svg`} width={42} height={42} alt="birth icon" />

      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">
          Date of Birth
        </p>
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">{`August 23, 1996`}</p>
      </div>
    </div>
  );
};

export default PatientDOB;
