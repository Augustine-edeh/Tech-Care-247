"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navLinks } from "@/data/navLinks";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="nav hidden lg:flex items-center justify-between w-[663px] h-[63px]">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          className={clsx(
            "flex justify-center items-center gap-[9px] h-[41px] hover:bg-unnamed-activestate-bg-2 focus:bg-unnamed-activestate-bg-2 outline-none rounded-[41px]",
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
  );
};

export default Navbar;
