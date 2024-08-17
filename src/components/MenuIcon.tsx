"use client";

import Image from "next/image";
import useMobileNavStore from "@/store/useMobileNavStore";

const MenuIcon = () => {
  const isOpen = useMobileNavStore((state) => state.isOpen);
  const toggleIsOpen = useMobileNavStore((state) => state.toggleIsOpen);

  return (
    <div
      className="flex justify-center items-center cursor-pointer px-2"
      onClick={() => {
        console.log(isOpen);
        toggleIsOpen();
      }}
    >
      <Image
        src="/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
        width={4}
        height={18}
        alt="settings"
      />
    </div>
  );
};

export default MenuIcon;
