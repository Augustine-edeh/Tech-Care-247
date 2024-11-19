"use client";

import Image from "next/image";
import Chart from "../Chart";
import DiagnosticListTable from "./DiagnosticListTable";
import LabResults from "./LabResults";
import PatientVitals from "./PatientVitals";
import { ClassNameType } from "../../../types/Ui";
import usePatientsStore from "@/store/usePatientsStore";
import DateRangeSelector from "../ui/DateRangeSelector";

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

  const patientInitials = selectedPatient?.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  const { name, age, gender } = selectedPatient || {};

  return (
    <div
      /* New VERSION */
      className={`${className} flex flex-1 flex-col h-full bg-yellow-200 xl:rounded-2xl p-5 gap-6`}
    >
      {/* Patient Quick View */}
      <div className="xl:hidden bg-white rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-xl font-medium">{patientInitials}</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{`${gender}, ${age} years`}</p>
          </div>
        </div>
      </div>

      {/* {activeTab === "overview" && ( */}
      <div className="xl:hidden flex-1 overflow-y-auto space-y-6">
        <PatientVitals />

        {/* Blood Pressure Graph */}
        <div className="bg-white rounded-lg flex flex-col gap-5 px-1 py-4">
          <div className="flex justify-between items-center px-2">
            <h3 className="font-semibold">Blood Pressure</h3>
            <DateRangeSelector />
          </div>
          <Chart />
        </div>
      </div>

      {/* Desktop Screen View */}
      <section className="hidden xl:block overflow-y-auto">
        <h2 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635 ">
          Diagnosis History
        </h2>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex bg-purple-600 h-96">
              <section className="w-2/3 flex flex-col gap-y-5">
                <div className="flex justify-between items-center">
                  <h1 className="font-bold text-lg text-[#072635]">
                    Blood Pressure
                  </h1>
                  <div className="flex gap-2">
                    {/* <p>Last 6 months</p> */}
                    {/* <Image
                    src="/expand_more_FILL0_wght300_GRAD0_opsz24.svg"
                    width={10}
                    height={10}
                    alt="month"
                  /> */}
                    <DateRangeSelector />
                  </div>
                </div>
                <div className="h-full">
                  <Chart />
                </div>
              </section>
              <section className="w-1/3 hidden md:col-span-4 md:flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <p className="size-4 rounded-full bg-[#E66FD2]" />
                    <h1>Systolic</h1>
                  </div>
                  <p>{`${
                    Systolic_value === undefined ? "- -" : Systolic_value
                  }`}</p>
                  <div className="flex items-center gap-x-2">
                    {Systolic_levels === "Normal" ? (
                      ""
                    ) : (
                      <Image
                        src={`/Arrow${
                          Systolic_levels === "Lower than Average"
                            ? "Down"
                            : "Up"
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
                    {`${
                      diastolic_value === undefined ? "- -" : diastolic_value
                    }`}
                  </p>
                  <div className="flex items-center gap-x-2">
                    {diastolic_levels === "Normal" ? (
                      ""
                    ) : (
                      <Image
                        src={`/Arrow${
                          diastolic_levels === "Lower than Average"
                            ? "Down"
                            : "Up"
                        }.svg`}
                        width={10}
                        height={5}
                        alt="indicator"
                      />
                    )}
                    <p>
                      {`${
                        diastolic_levels === undefined
                          ? "- -"
                          : diastolic_levels
                      }`}
                    </p>
                  </div>
                </div>
              </section>
            </div>
            <PatientVitals />
          </div>

          <DiagnosticListTable />
        </div>
      </section>
    </div>
  );
};

export default PatientDiagnosisInfo;
