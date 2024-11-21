"use client";

import Image from "next/image";
import usePatientsStore from "@/store/usePatientsStore";

const PatientVitals = () => {
  const selectedPatient = usePatientsStore((state) => state.selectedPatient);
  const respiratory_rate_value = usePatientsStore(
    (state) =>
      state.selectedPatient?.diagnosis_history[0].respiratory_rate.value
  );
  const temperature_value = usePatientsStore(
    (state) => state.selectedPatient?.diagnosis_history[0].temperature.value
  );
  const heart_rate_value = usePatientsStore(
    (state) => state.selectedPatient?.diagnosis_history[0].heart_rate.value
  );
  const respiratory_rate_levels = usePatientsStore(
    (state) =>
      state.selectedPatient?.diagnosis_history[0].respiratory_rate.levels
  );
  const temperature_levels = usePatientsStore(
    (state) => state.selectedPatient?.diagnosis_history[0].temperature.levels
  );
  const heart_rate_levels = usePatientsStore(
    (state) => state.selectedPatient?.diagnosis_history[0].heart_rate.levels
  );

  return (
    <section className="flex flex-col xl:flex-row justify-between items-center gap-5">
      {/* Vital card (respiratory rate) */}
      <div className="flex xl:flex-col justify-between gap-y-4 w-full xl:w-56 px-4 py-2 rounded-xl bg-[#E0F3FA]">
        <div className="flex flex-col gap-y-4">
          <Image
            src="/respiratory rate.svg"
            width={96}
            height={96}
            alt="respiratory rate"
            className="hidden xl:block"
          />

          <div>
            <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
              {`Respiratory rate`}
            </p>
            <p className="font-manrope font-bold xl:font-extrabold text-2xl mt-1 xl:mt-0 xl:text-[30px] leading-10 text-unnamed-color-072635">
              {`${
                respiratory_rate_value === undefined
                  ? "--"
                  : respiratory_rate_value
              } bpm`}
            </p>
          </div>
        </div>

        <div className="h-fit flex gap-2">
          {respiratory_rate_levels === "Normal" ? (
            ""
          ) : (
            <Image
              src={`/Arrow${
                respiratory_rate_levels === "Lower than Average" ? "Down" : "Up"
              }.svg`}
              width={10}
              height={5}
              alt="indicator"
            />
          )}

          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left">
            {selectedPatient?.diagnosis_history[0].respiratory_rate.levels}
          </p>
        </div>
      </div>

      {/* Vital card (temperature) */}
      <div className="flex xl:flex-col justify-between gap-y-4 w-full xl:w-56 px-4 py-2 rounded-xl bg-[#FFE6E9]">
        <div className="flex flex-col gap-y-4">
          <Image
            src="/temperature.svg"
            width={96}
            height={96}
            alt="indicator"
            className="hidden xl:block"
          />

          <div>
            <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
              {`Temperature`}
            </p>
            <p className="font-manrope font-bold xl:font-extrabold text-2xl mt-1 xl:mt-0 xl:text-[30px] leading-10 text-unnamed-color-072635">
              {`${temperature_value === undefined ? "--" : temperature_value}`}
              &deg; F
            </p>
          </div>
        </div>

        <div className="h-fit flex gap-2">
          {temperature_levels === "Normal" ? (
            ""
          ) : (
            <Image
              src={`/Arrow${
                temperature_levels === "Lower than Average" ? "Down" : "Up"
              }.svg`}
              width={10}
              height={5}
              alt="indicator"
            />
          )}

          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left">
            {temperature_levels}
          </p>
        </div>
      </div>

      {/* Vital card (heart rate) */}
      <div className="flex xl:flex-col justify-between gap-y-4 w-full xl:w-56 px-4 py-2 rounded-xl bg-[#FFE6F1]">
        <div className="flex flex-col gap-y-4">
          <Image
            src="/HeartBPM.svg"
            width={96}
            height={96}
            alt="indicator"
            className="hidden xl:block"
          />
          <div>
            <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
              {`Heart rate`}
            </p>
            <p className="font-manrope font-bold xl:font-extrabold text-2xl mt-1 xl:mt-0 xl:text-[30px] leading-10 text-unnamed-color-072635">
              {`${
                heart_rate_value === undefined ? "--" : heart_rate_value
              } bpm`}
            </p>
          </div>
        </div>

        <div className="h-fit flex gap-2">
          {heart_rate_levels === "Normal" ? (
            ""
          ) : (
            <Image
              src={`/Arrow${
                heart_rate_levels === "Lower than Average" ? "Down" : "Up"
              }.svg`}
              width={10}
              height={5}
              alt="indicator"
            />
          )}

          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left">
            {heart_rate_levels}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PatientVitals;
