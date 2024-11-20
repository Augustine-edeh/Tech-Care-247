"use client";

import usePatientsStore from "@/store/usePatientsStore";
import Image from "next/image";
import React from "react";
import { ClassNameType } from "../../../types/Ui";

const LabResults = ({ className }: ClassNameType) => {
  const lab_results = usePatientsStore(
    (state) => state.selectedPatient?.lab_results
  );

  return (
    <section
      className={`${className} flex flex-col gap-4 xl:gap-3 bg-unnamed-color-ffffff rounded-2xl p-5  xl:py-3`}
    >
      <h3 className="font-manrope font-extrabold text-3xl leading-8 text-unnamed-color-072635">
        Lab Results
      </h3>

      <ul className="grid gap-y-1 overflow-y-auto">
        {lab_results?.map((result, index) => (
          <button
            key={index}
            className="flex justify-between items-center h-10 hover:bg-unnamed-page-bg focus:bg-unnamed-page-bg cursor-default outline-none"
          >
            <p className="font-manrope text-sm leading-[18px] text-unnamed-color-072635 text-left capitalize">
              {result}
            </p>
            <Image
              src="/download_FILL0_wght300_GRAD0_opsz24.svg"
              width={20}
              height={20}
              alt="download result"
              title="download result"
              className="cursor-pointer"
            />
          </button>
        ))}
      </ul>
    </section>
  );
};

export default LabResults;
