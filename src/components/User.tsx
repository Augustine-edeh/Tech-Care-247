import Image from "next/image";
import SettingsIcon from "./SettingsIcon";
import MenuIcon from "./MenuIcon";

const User = () => {
  return (
    <div className="flex items-center w-[241p] h-[44px] divide-x-2">
      <section className="flex pr-3 gap-x-2 cursor-pointer">
        <Image
          src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
          width={44}
          height={44}
          alt="doctor"
        />

        <div className="hidden md:flex lg:hidden xl:flex flex-col justify-center w-[129] h-[38p]">
          <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
            Dr. Jose Simmons
          </p>
          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-707070 text-left w-[129px]">
            General Practitioner
          </p>
        </div>
      </section>

      <section className="flex gap-x-3 pl-3">
        <SettingsIcon />
        <MenuIcon />
      </section>
    </div>
  );
};

export default User;
