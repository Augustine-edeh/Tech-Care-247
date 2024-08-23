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
    <section className="flex justify-between items-center flex-wrap gap-5">
      {/* Vital card (respiratory rate) */}
      <div className="flex flex-col gap-y-4 w-[calc(100dvh-58dvh)] sm:w-[228px] h-[242px] p-4 rounded-xl bg-[#E0F3FA]">
        <Image
          src="/respiratory rate.svg"
          width={96}
          height={96}
          alt="respiratory rate"
        />

        <div>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`Respiratory rate`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">
            {`${
              respiratory_rate_value === undefined
                ? "--"
                : respiratory_rate_value
            } bpm`}
          </p>
        </div>

        <div className="flex gap-2">
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
      <div className="flex flex-col gap-y-4 w-[calc(100dvh-63dvh)] sm:w-[228px] h-[242px] p-4 rounded-xl bg-[#FFE6E9]">
        <Image src="/temperature.svg" width={96} height={96} alt="indicator" />

        <div>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`Temperature`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">
            {`${temperature_value === undefined ? "--" : temperature_value}`}
            &deg; F
          </p>
        </div>

        <div className="flex gap-2">
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
      <div className="flex flex-col gap-y-4 w-[calc(100dvh-68dvh)] sm:w-[228px] h-[242px] p-4 rounded-xl bg-[#FFE6F1]">
        <Image src="/HeartBPM.svg" width={96} height={96} alt="indicator" />

        <div>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`Heart rate`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">
            {`${heart_rate_value === undefined ? "--" : heart_rate_value} bpm`}
          </p>
        </div>

        <div className="flex gap-2">
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
