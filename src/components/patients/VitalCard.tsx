import Image from "next/image";
import { VitalCardProps } from "../../../types/VitalCardProps";

const VitalCard = ({
  label,
  value,
  levels,
  unit = "",
  bgColor,
  iconSrc,
}: VitalCardProps) => {
  return (
    <div
      className={`flex xl:flex-col justify-between gap-y-4 w-full xl:w-56 px-4 py-2 rounded-xl ${bgColor}`}
    >
      {/* Icon and Value Section */}
      <div className="flex flex-col gap-y-4">
        <Image
          src={iconSrc}
          width={96}
          height={96}
          alt={`${label} icon`}
          className="hidden xl:block"
        />

        <div>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 capitalize">
            {label}
          </p>
          <p className="font-manrope font-bold xl:font-extrabold text-2xl mt-1 xl:mt-0 xl:text-[30px] leading-10 text-unnamed-color-072635">
            {value === undefined ? "--" : `${value} ${unit}`}
          </p>
        </div>
      </div>

      {/* Levels Indicator Section */}
      <div className="h-fit flex items-center gap-2">
        {levels && levels !== "Normal" && (
          <Image
            src={`/Arrow${levels === "Lower than Average" ? "Down" : "Up"}.svg`}
            width={10}
            height={5}
            alt={`${levels} indicator`}
          />
        )}
        <p className="font-manrope font-normal text-sm leading-5 text-unnamed-color-072635">
          {levels || "--"}
        </p>
      </div>
    </div>
  );
};

export default VitalCard;
