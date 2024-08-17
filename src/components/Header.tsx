"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import User from "./UserCard";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

import useMobileNavStore from "@/store/useMobileNavStore";
import SettingsIcon from "./SettingsIcon";
import MenuIcon from "./MenuIcon";

const Header = () => {
  const isOpen = useMobileNavStore((state) => state.isOpen);
  const toggleIsOpen = useMobileNavStore((state) => state.toggleIsOpen);

  return (
    <header className="flex items-center justify-between px-[20px] md:px-[33px] h-[72px] bg-unnamed-color-ffffff rounded-[70px]">
      <Logo />
      <Navbar />
      <div className="flex divide-x-2">
        <User />
        <section className="flex gap-x-3 pl-3">
          <SettingsIcon />
          <MenuIcon />
        </section>
      </div>

      {isOpen && <MobileNav />}
    </header>
  );
};

export default Header;
