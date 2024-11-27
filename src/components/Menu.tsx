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
      <div className="bg-zinc-200 lg:hidden fixed top-5 right-5 h-[calc(100dvh-50px)] min-w-60 rounded-md overflow-hidden z-40">
        <CloseMobileMenuHandle />
        <nav>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className={clsx(
                "flex items-center gap-[9px] h-[41px] hover:bg-unnamed-activestate-bg-2 outline-none rounded-[41px]",
                {
                  "bg-unnamed-activestate-bg-1 hover:bg-unnamed-activestate-bg-1":
                    pathname === link.href,
                }
              )}
              href={link.href}
            >
              <div className="h-[19px] mx-5 flex justify-center gap-x-[9px]">
                <Image
                  src={link.icon}
                  width={link.iconSize.width}
                  height={link.iconSize.height}
                  alt={link.label.toLowerCase()}
                />
                <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
                  {link.label}
                </p>
              </div>
            </Link>
          ))}
        </nav>

        <section className="absolute bottom-0 w-full flex justify-between p-3 border-t-2 border-gray-300">
          <User />
          <MenuIcon />
        </section>
      </div>
    </>
  );
};

export default Menu;
