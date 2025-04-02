import { Download } from "lucide-react";

const LabResultsAndReports = ({ className = "" }) => {
  return (
    <div className={`flex flex-col rounded-2xl border p-5 ${className}`}>
      <h4>Lab Results & Reports </h4>
      <ul className="list-disc">
        <li className="flex gap-3">
          <Download />
          <div>
            <p>Complete Blood Count</p>
            <i>Jan 5, 2024</i>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LabResultsAndReports;
