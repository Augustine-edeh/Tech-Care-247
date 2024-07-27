import Image from "next/image";
import React from "react";

type classNameType = {
  className: string;
};

const LabResults = ({ className }: classNameType) => {
  return (
    <section
      className={`${className} bg-unnamed-color-ffffff w-[367p] h-[296px h-full rounded-[16px] p-5 mt-`}
    >
      <h3 className="font-manrope font-extrabold text-3xl leading-[33px] text-unnamed-color-072635">
        Lab Results
      </h3>

      <ul className="mt-4">
        <div className="flex justify-between">
          <p className="font-manrope text-sm leading-[18px] text-unnamed-color-072635 text-left capitalize">
            Blood Tests
          </p>
          <Image
            src="/download_FILL0_wght300_GRAD0_opsz24 (1).svg"
            width={20}
            height={20}
            alt="download result"
          />
        </div>
      </ul>
    </section>
  );
};

export default LabResults;
