"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { navLinks } from "@/data/navigation";

interface NavbarProps {
  onNavItemClick?: () => void; // Optional callback for handling nav item clicks
}

const Navbar = ({ onNavItemClick }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="nav flex flex-col xl:flex-row gap-5 xl:gap-0 px-2 xl:px-0">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "flex items-center h-10 hover:bg-unnamed-activestate-bg-2 focus:bg-unnamed-activestate-bg-2 outline-none rounded-md xl:rounded-3xl px-5",
            {
              "bg-unnamed-activestate-bg-1 hover:bg-unnamed-activestate-bg-1":
                pathname === link.href,
            }
          )}
          onClick={onNavItemClick} // Close menu on click
        >
          <div className="flex gap-x-4 xl:gap-x-[9px]">
            <Image
              src={link.icon}
              width={link.iconSize.width}
              height={link.iconSize.height}
              alt={link.label.toLowerCase()}
            />
            <p className="font-manrope font-bold text-sm leading-5 text-unnamed-color-072635 text-left">
              {link.label}
            </p>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
