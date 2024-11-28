import Image from "next/image";
import clsx from "clsx";

import UserCardProps from "../../../types/UserCard";

const UserCard = ({ variant = "default" }: UserCardProps) => {
  return (
    <div className="flex items-center">
      <section className="flex items-center pr-3 gap-x-2 cursor-pointer">
        <Image
          src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
          width={44}
          height={44}
          alt="doctor"
          className="xl:size-14 rounded-full"
        />

        {/* Conditionally render the text section only when variant is "menu" */}
        <div
          className={clsx(
            "xl:flex flex-col justify-center",
            variant === "default" && "hidden" // Show hidden when variant is "default"
          )}
        >
          <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
            Dr. Jose Simmons
          </p>
          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-707070 text-left w-[129px]">
            General Practitioner
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserCard;
