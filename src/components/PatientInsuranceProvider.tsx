import Image from "next/image";

Image;
const PatientInsuranceProvider = () => {
  return (
    <div className="flex gap-x-4">
      <Image
        src={`/InsuranceIcon.svg`}
        width={42}
        height={42}
        alt="insurance icon"
      />

      <div className="flex flex-col">
        <p className="font-manrope font-medium text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">
          Insurance Provider
        </p>
        <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left capitalize">{`Sunrise Health Assurance`}</p>
      </div>
    </div>
  );
};

export default PatientInsuranceProvider;
