"use client";

import {
  Activity,
  ChevronDown,
  ChevronUp,
  HeartPulse,
  Thermometer,
} from "lucide-react";
import Chart from "./Chart";
import usePatientsStore from "@/store/usePatientsStore";

const MedicalHistoryAndVitals = () => {
  const { selectedPatient } = usePatientsStore();
  const diagnosis = selectedPatient?.diagnosis_history?.[0];

  const getValue = (value: number | undefined) =>
    value !== undefined ? value : "--";

  const renderLevel = (level: string | undefined) => {
    if (level === "Normal") return "Normal";
    if (level === "Lower than Average")
      return (
        <>
          <ChevronDown />
        </>
      );
    if (level === "Higher than Average")
      return (
        <>
          <ChevronUp />
        </>
      );
    return "--";
  };

  return (
    <div className="w-1/2 flex flex-col gap-5">
      <h4 className="text-2xl tracking-wide font-semibold">
        Medical History & Vitals
      </h4>
      <div className="bg-purple-100 flex-1 p-5 rounded-2xl flex flex-col justify-between gap-3">
        <div className="min-h-40">
          <Chart />
        </div>

        <hr className="border-1 border-gray-300 " />

        <div className="flex-1 flex justify-between">
          {/* Respiratory Rate */}
          <div className="flex flex-col gap-3">
            <h4>Respiratory rate</h4>
            <p className="font-semibold text-2xl">
              {getValue(diagnosis?.respiratory_rate?.value)} bpm
            </p>
            <p className="flex justify-between items-center text-sm text-gray-700">
              <Activity />
              {renderLevel(diagnosis?.respiratory_rate?.levels)}
            </p>
          </div>

          {/* Temperature */}
          <div className="flex flex-col gap-3">
            <h4>Temperature</h4>
            <p className="font-semibold text-2xl">
              {getValue(diagnosis?.temperature?.value)} °F
            </p>
            <p className="flex justify-between items-center text-sm text-gray-700">
              <Thermometer />
              {renderLevel(diagnosis?.temperature?.levels)}
            </p>
          </div>

          {/* Heart Rate */}
          <div className="flex flex-col gap-3">
            <h4>Heart rate</h4>
            <p className="font-semibold text-2xl">
              {getValue(diagnosis?.heart_rate?.value)} bpm
            </p>
            <p className="flex justify-between items-center text-sm text-gray-700">
              <HeartPulse />
              {renderLevel(diagnosis?.heart_rate?.levels)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryAndVitals;
