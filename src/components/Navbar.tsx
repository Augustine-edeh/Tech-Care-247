"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="nav hidden lg:flex items-center justify-between w-[663px] h-[63px]">
      {[
        {
          href: "/",
          icon: "/home_FILL0_wght300_GRAD0_opsz24.svg",
          label: "Overview",
          iconSize: { width: 16, height: 17 },
        },
        {
          href: "/patients",
          icon: "/group_FILL0_wght300_GRAD0_opsz24.svg",
          label: "Patients",
          iconSize: { width: 24, height: 17 },
        },
        {
          href: "/schedule",
          icon: "/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
          label: "Schedule",
          iconSize: { width: 15, height: 17 },
        },
        {
          href: "/message",
          icon: "/group_FILL0_wght300_GRAD0_opsz24.svg",
          label: "Message",
          iconSize: { width: 19, height: 17 },
        },
        {
          href: "/transactions",
          icon: "/credit_card_FILL0_wght300_GRAD0_opsz24.svg",
          label: "Transactions",
          iconSize: { width: 22, height: 17 },
        },
        {
          href: "/news",
          icon: "/news.svg",
          label: "News",
          iconSize: { width: 16, height: 17 },
        },
      ].map((link) => (
        <Link
          key={link.href}
          className={clsx(
            "flex justify-center items-center gap-[9px] h-[41px] hover:bg-unnamed-activestate-bg-2 outline-none rounded-[41px]",
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
