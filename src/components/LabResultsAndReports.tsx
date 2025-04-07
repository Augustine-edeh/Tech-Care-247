import { Download } from "lucide-react";

const LabResultsAndReports = ({ className = "" }) => {
  return (
    <div className={`flex flex-col gap-5 rounded-2xl border p-5 ${className}`}>
      <h4 className="text-2xl">Lab Results & Reports</h4>

      <ul className="flex flex-col gap-5 list-disc pl-5">
        <li className="flex gap-3">
          <Download />
          <div>
            <p className="">Complete Blood Count</p>
            <i className="opacity-60">Jan 5, 2024</i>
          </div>
        </li>
        <li className="flex gap-3">
          <Download />
          <div>
            <p className="">MRI</p>
            <i className="opacity-60">Nov 19, 2023</i>
          </div>
        </li>
        <li className="flex gap-3">
          <Download />
          <div>
            <p className="">Covid</p>
            <i className="opacity-60">Sept 2, 2020</i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LabResultsAndReports;
