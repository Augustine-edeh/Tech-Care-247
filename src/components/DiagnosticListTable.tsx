"use client";

import usePatientsStore from "@/store/usePatientsStore";

const DiagnosticListTable = () => {
  const diagnostics = usePatientsStore(
    (state) => state.selectedPatient?.diagnostic_list
  );
  return (
    // <ul>
    //   {diagnostic_list?.map((diagnostic, index) => (
    //     <li key={index}>{`diagnostic ${index}`}</li>
    //   ))}
    // </ul>

    <div className="mt-10">
      <table className="bg-white ">
        <thead className="text-gray-700">
          <tr className="">
            <th className="py-3 px-4 text-left bg-[#F6F7F8] rounded-l-3xl">
              Problem/Diagnosis
            </th>
            <th className="py-3 px-4 text-left bg-[#F6F7F8]">Description</th>
            <th className="py-3 px-4 text-left bg-[#F6F7F8] rounded-r-3xl">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {diagnostics?.map((diagnosis, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-4">{diagnosis.name}</td>
              <td className="py-3 px-4 w-[55%]">{diagnosis.description}</td>
              <td className={`py-3 px-4 ${getStatusColor(diagnosis.status)}`}>
                {diagnosis.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Optional: Function to get color classes based on status
const getStatusColor = (status: string) => {
  switch (status) {
    case "Under Observation":
      return "text-yellow-500";
    case "Cured":
      return "text-green-500";
    case "Inactive":
      return "text-gray-500";
    default:
      return "text-gray-700";
  }
};

export default DiagnosticListTable;
