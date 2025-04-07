"use client";

import { Download } from "lucide-react";
import usePatientsStore from "@/store/usePatientsStore";

const LabResultsAndReports = ({ className = "" }) => {
  const { selectedPatient } = usePatientsStore();

  return (
    <div className={`flex flex-col gap-5 rounded-2xl border p-5 ${className}`}>
      <h4 className="text-2xl">Lab Results & Reports</h4>

      <ul className="flex flex-col flex-1 gap-5 list-disc pl-5 pr-2 overflow-y-auto">
        {selectedPatient?.lab_results.map((result, index) => (
          <li key={index} className="flex gap-3">
            <Download />
            <div>
              <p className="">{result}</p>
              <i className="opacity-60">Jan 5, 2024</i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResultsAndReports;
