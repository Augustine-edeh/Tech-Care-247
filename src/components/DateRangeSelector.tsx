import React from "react";
import usePatientsStore from "@/store/usePatientsStore";

const DateRangeSelector = () => {
  const { timeRange, setTimeRange } = usePatientsStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(event.target.value);
  };

  return (
    <div className="flex items-center gap-x-1">
      <label htmlFor="dateRange" className="font-medium text-gray-700">
        Last
      </label>

      <select
        id="dateRange"
        value={timeRange}
        onChange={handleChange}
        className="bg-transparent px-2 py-1 rounded cursor-pointer"
      >
        <option value="6">6 months</option>
        <option value="5">5 months</option>
        <option value="4">4 months</option>
        <option value="3">3 months</option>
        <option value="2">2 months</option>
      </select>
    </div>
  );
};

export default DateRangeSelector;
