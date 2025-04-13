"use client";

import usePatientsStore from "@/store/usePatientsStore";

const DiagnosticListTable = () => {
  const diagnostics = usePatientsStore(
    (state) => state.selectedPatient?.diagnostic_list
  );

  return (
    <div className="flex flex-col gap-8 bg-unnamed-color-ffffff rounded-2xl xl:rounded-none p- 5 xl:p-0">
      <h2 className="font-manrope font-extrabold text-3xl leading-33 text-unnamed-color-072635 pt-5 px-5 xl:p-0">
        Diagnostic List
      </h2>

      <table className="bg- yellow-500 white w-full">
        <thead className="text-gray-700 border border-gray-400 xl:border-none">
          {/* <tr className="">
            <th className="py-3 px-4 text-left bg-unnamed-page-bg rounded-l-3xl">
              Problem/Diagnosis
            </th>
            <th className="py-3 px-4 text-left bg-unnamed-page-bg">
              Description
            </th>
            <th className="py-3 px-4 text-left bg-unnamed-page-bg rounded-r-3xl">
              Status
            </th>
          </tr> */}

          <tr>
            <th className="py-3 px-2 md:px-2 xl:px-4 text-left bg-unnamed-page-bg xl:rounded-l-3xl">
              Diagnosis
            </th>
            <th className="py-3 md:px-2 xl:px-4 text-left bg-unnamed-page-bg">
              Description
            </th>
            <th className="py-3 px-1 md:px-2 xl:px-4 text-left bg-unnamed-page-bg xl:rounded-r-3xl">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {diagnostics?.map((diagnosis, index) => (
            <tr key={index} className="border-b">
              <td className="py-3 px-2 md:px-4">{diagnosis.name}</td>
              <td className="py-3 px-2 md:px-4">{diagnosis.description}</td>
              <td
                className={`py-3 px-2 md:px-4 ${getStatusColor(
                  diagnosis.status
                )}`}
              >
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
