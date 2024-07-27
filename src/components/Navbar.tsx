import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="nav hidden lg:flex items-center justify-between w-[663px] h-[63px]">
      <a
        className="flex justify-center items-center gap-[9px] h-[41px]  focus:bg-unnamed-activestate-bg-1 hover:bg-unnamed-activestate-bg-2 outline-none rounded-[41px]"
        href="#"
      >
        <div className="h-[19px] mx-5 flex justify-center gap-x-[9px]">
          <Image
            src="/home_FILL0_wght300_GRAD0_opsz24.svg"
            width={16}
            height={17}
            alt="home"
          />

          <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
            Overview
          </p>
        </div>
      </a>

      <a
        className="flex justify-center items-center gap-[9px] h-[41px]  focus:bg-unnamed-activestate-bg-1 hover:bg-unnamed-activestate-bg-2 outline-none rounded-[41px]"
        href="#"
      >
        <div className="h-[19px] mx-5 flex justify-center gap-x-[9px]">
          <Image
            src="/group_FILL0_wght300_GRAD0_opsz24.svg"
            width={24}
            height={17}
            alt="home"
          />
          <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
            Patients
          </p>
        </div>
      </a>

      <a
        className="flex justify-center items-center gap-[9px] h-[41px]  focus:bg-unnamed-activestate-bg-1 hover:bg-unnamed-activestate-bg-2 outline-none rounded-[41px]"
        href="#"
      >
        <div className="h-[19px] mx-5 flex justify-center gap-x-[9px]">
          <Image
            src="/calendar_today_FILL0_wght300_GRAD0_opsz24.svg"
            width={15}
            height={17}
            alt="home"
          />
          <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
            Schedule
          </p>
        </div>
      </a>

      <a
        className="flex justify-center items-center gap-[9px] h-[41px]  focus:bg-unnamed-activestate-bg-1 hover:bg-unnamed-activestate-bg-2 outline-none rounded-[41px]"
        href="#"
      >
        <div className="h-[19px] mx-5 flex justify-center gap-x-[9px]">
          <Image
            src="/group_FILL0_wght300_GRAD0_opsz24.svg"
            width={19}
            height={17}
            alt="home"
          />
          <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
            Message
          </p>
        </div>
      </a>

      <a
        className="flex justify-center items-center gap-[9px] h-[41px]  focus:bg-unnamed-activestate-bg-1 hover:bg-unnamed-activestate-bg-2 outline-none rounded-[41px]"
        href="#"
      >
        <div className="h-[19px] mx-5 flex justify-center gap-x-[9px]">
          <Image
            src="/credit_card_FILL0_wght300_GRAD0_opsz24.svg"
            width={22}
            height={17}
            alt="home"
          />
          <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
            Transactions
          </p>
        </div>
      </a>
    </nav>
  );
};

export default Navbar;
