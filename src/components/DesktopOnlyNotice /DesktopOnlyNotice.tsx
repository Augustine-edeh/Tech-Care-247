"use client";

import { Monitor } from "lucide-react";
import Link from "next/link";

interface ScreenSizeAlertProps {
  message?: string;
  learnMoreHref?: string;
}

const DesktopOnlyNotice = ({
  message = "Switch to a desktop or larger screen to access this page.",
  learnMoreHref = "#",
}: ScreenSizeAlertProps) => {
  return (
    <div
      className="flex flex-col justify-center items-center flex-1 text-center rounded-md shadow-md p-4"
      role="alert"
    >
      <Monitor className="w-8 h-8 text-unnamed-color-072635 mb-2 opacity-60" />
      <p className="text-lg font-semibold text-unnamed-color-072635 leading-7">
        {message}
      </p>
      <Link
        href={learnMoreHref}
        className="text-blue-700 hover:text-blue-800 mt-1"
      >
        Learn more...
      </Link>
    </div>
  );
};

export default DesktopOnlyNotice;
