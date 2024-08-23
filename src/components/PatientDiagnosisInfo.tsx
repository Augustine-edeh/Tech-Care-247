"use client";

import Image from "next/image";
import Chart from "./Chart";
import DiagnosticListTable from "./DiagnosticListTable";
import LabResults from "./LabResults";
import PatientVitals from "./PatientVitals";
import { ClassNameType } from "../../types/Ui";
import usePatientsStore from "@/store/usePatientsStore";

const PatientDiagnosisInfo = ({ className }: ClassNameType) => {
  const selectedPatient = usePatientsStore((state) => state.selectedPatient);

  const Systolic_value =
    selectedPatient?.diagnosis_history[0].blood_pressure.systolic.value;

  const Systolic_levels =
    selectedPatient?.diagnosis_history[0].blood_pressure.systolic.levels;

  const diastolic_value =
    selectedPatient?.diagnosis_history[0].blood_pressure.diastolic.value;

  const diastolic_levels =
    selectedPatient?.diagnosis_history[0].blood_pressure.diastolic.levels;

  return (
    <div className={`${className} flex flex-col gap-8 mt-[14px]`}>
      {/* Diagnosis History card */}
      <section className="bg-unnamed-color-ffffff w-[766p p-5 h-[673px rounded-[16px]">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635 ">
          Diagnosis History
        </h3>

        <div className="grid grid-cols-12 justify-center items-cente r sm:items-start sm:gap-10 p-3 sm:p-4 h-[298px] md:h-[360px] rounded-xl bg-[#F4F0FE] mt-10 mb-5">
          <section className="col-span-12 md:col-span-8 flex flex-col gap-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-lg text-[#072635]">
                Blood Pressure
              </h1>

              <div className="flex gap-2">
                <p>Last 6 months</p>
                <Image
                  src="/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                  width={10}
                  height={10}
                  alt="month"
                />
              </div>
            </div>

            <div className="h-full">
              <Chart />
            </div>
          </section>

          <section className="hidden md:col-span-4 md:flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2">
                <p className="size-4 rounded-full bg-[#E66FD2]" />
                <h1>Systolic</h1>
              </div>

              <p>
                {`${Systolic_value === undefined ? "- -" : Systolic_value}`}
              </p>

              <div className="flex items-center gap-x-2">
                {Systolic_levels === "Normal" ? (
                  ""
                ) : (
                  <Image
                    src={`/Arrow${
                      Systolic_levels === "Lower than Average" ? "Down" : "Up"
                    }.svg`}
                    width={10}
                    height={5}
                    alt="indicator"
                  />
                )}

                <p>{`${
                  Systolic_levels === undefined ? "- -" : Systolic_levels
                }`}</p>
              </div>
            </div>

            <hr className="h-[1px] bg-unnamed-color-cbc8d4" />

            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2">
                <p className="size-4 rounded-full bg-[#8C6FE6]" />
                <h1>Diastolic</h1>
              </div>

              <p>
                {`${diastolic_value === undefined ? "- -" : diastolic_value}`}
              </p>

              <div className="flex items-center gap-x-2">
                {diastolic_levels === "Normal" ? (
                  ""
                ) : (
                  <Image
                    src={`/Arrow${
                      diastolic_levels === "Lower than Average" ? "Down" : "Up"
                    }.svg`}
                    width={10}
                    height={5}
                    alt="indicator"
                  />
                )}

                <p>
                  {`${
                    diastolic_levels === undefined ? "- -" : diastolic_levels
                  }`}
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mx-5">
          <PatientVitals />
        </div>
      </section>

      {/* Diagnostic List card */}
      <section className="bg-unnamed-color-ffffff w-[766px h-[349px h-full rounded-[16px] p-5">
        <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
          Diagnostic List
        </h3>

        <DiagnosticListTable />
      </section>

      <LabResults className="lg:hidden" />
    </div>
  );
};

export default PatientDiagnosisInfo;
