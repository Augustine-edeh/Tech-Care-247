import Image from "next/image";

const VitalCard = ({ label, value, levels, unit, bgColor, iconSrc }) => {
  return (
    <div
      className={`flex xl:flex-col justify-between gap-y-4 w-full xl:w-56 px-4 py-2 rounded-xl ${bgColor}`}
    >
      <div className="flex flex-col gap-y-4">
        <Image
          src={iconSrc}
          width={96}
          height={96}
          alt={label}
          className="hidden xl:block"
        />

        <div>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {label}
          </p>
          <p className="font-manrope font-bold xl:font-extrabold text-2xl mt-1 xl:mt-0 xl:text-[30px] leading-10 text-unnamed-color-072635">
            {value === undefined ? "--" : `${value} ${unit}`}
          </p>
        </div>
      </div>

      <div className="h-fit flex gap-2">
        {levels === "Normal" ? null : (
          <Image
            src={`/Arrow${levels === "Lower than Average" ? "Down" : "Up"}.svg`}
            width={10}
            height={5}
            alt="indicator"
          />
        )}
        <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left">
          {levels || "--"}
        </p>
      </div>
    </div>
  );
};
export default VitalCard;
