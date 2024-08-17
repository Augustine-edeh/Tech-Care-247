"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import useMobileNavStore from "@/store/useMobileNavStore";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import Image from "next/image";
import User from "./UserCard";
import MenuIcon from "./MenuIcon";

const MobileNav = () => {
  const isOpen = useMobileNavStore((state) => state.isOpen);
  const toggleIsOpen = useMobileNavStore((state) => state.toggleIsOpen);
  const pathname = usePathname();

  return (
    <div className="bg-zinc-200 md:hidden fixed top-5 right-5 h-[calc(100dvh-50px)] min-w-60 rounded-md overflow-hidden">
      <div
        className="h-8 px-3 flex justify-end items-center bg-zinc-300 font-bold"
        onClick={toggleIsOpen}
      >
        X
      </div>
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

      <section className="absolute bottom-0 w-full flex  justify-between p-3 border-t-2 border-gray-300">
        <User />
        <MenuIcon />
      </section>
    </div>
  );
};

export default MobileNav;
