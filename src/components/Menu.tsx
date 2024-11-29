"use client";

import { useEffect } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import Link from "next/link";
import Image from "next/image";
import User from "./ui/UserCard";
import MenuIcon from "./ui/MenuIcon";
import CloseMobileMenuHandle from "./ui/CloseMobileMenuHandle";
import useMobileNavStore from "@/store/useMobileNavStore";
import Navbar from "./Navbar";
import { LogOut } from "lucide-react";

const Menu = () => {
  const pathname = usePathname();
  const toggleIsOpen = useMobileNavStore((state) => state.toggleIsOpen);
  const isOpen = useMobileNavStore((state) => state.isOpen);

  useEffect(() => {
    // Close menu when Escape key is pressed
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleIsOpen();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggleIsOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={toggleIsOpen} // Close menu when the backdrop is clicked
      />

      {/* Menu */}
      <div className="bg-unnamed-color-ffffff zinc-200 xl:hidden fixed top-0 right-0 h-full w-80 z-40">
        <div className="flex justify-between border-b-2 p-5 mb-5">
          <User variant="menu" />
          <CloseMobileMenuHandle />
        </div>

        <Navbar />

        <section className="absolute bottom-0 w-full p-3 border-t-2 border-gray-300">
          <button className="flex items-center gap-3 px-4 py-4 w-full bg-primaryBlue hover:bg-secondaryBlue  text-white rounded-md">
            <LogOut />
            <span>Logout</span>
          </button>
        </section>
      </div>
    </>
  );
};

export default Menu;
