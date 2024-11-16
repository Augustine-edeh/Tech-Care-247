"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import User from "./UserCard";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

import useMobileNavStore from "@/store/useMobileNavStore";
import SettingsIcon from "./SettingsIcon";
import MenuIcon from "./MenuIcon";
import NavTab from "./NavTab";

const Header = () => {
  const isOpen = useMobileNavStore((state) => state.isOpen);

  return (
    <header className="">
      <div className="flex items-center justify-between px-[20px] md:px-[33px] h-[72px] bg-unnamed-color-ffffff bg-red-200 lg:rounded-[70px]">
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
      </div>

      <NavTab />
    </header>
  );
};

export default Header;
