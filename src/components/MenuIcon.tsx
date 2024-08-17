"use client";

import Image from "next/image";
import useMobileNavStore from "@/store/useMobileNavStore";

const MenuIcon = () => {
  const isOpen = useMobileNavStore((state) => state.isOpen);
  const toggleIsOpen = useMobileNavStore((state) => state.toggleIsOpen);

  return (
    <Image
      src="/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
      width={4}
      height={18}
      alt="settings"
      className="cursor-pointer"
      onClick={() => {
        console.log(isOpen);
        toggleIsOpen();
      }}
    />
  );
};

export default MenuIcon;
