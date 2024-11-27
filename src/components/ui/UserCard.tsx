import Image from "next/image";

const UserCard = () => {
  return (
    <div className="flex items-center h- [44px] bg-red -500">
      <section className="flex items-center pr-3 gap-x-2 cursor-pointer">
        <Image
          src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
          width={44}
          height={44}
          alt="doctor"
          className="xl:size-14 rounded-full"
        />

        <div className="hidden xl:flex flex-col justify-center">
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
