import React from "react";
import usePatientsStore from "@/store/usePatientsStore";

const DateRangeSelector = () => {
  const { timeRange, setTimeRange } = usePatientsStore();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(event.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="dateRange" className="font-medium text-gray-700">
        Select Date Range:
      </label>
      <select
        id="dateRange"
        value={timeRange}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded-md"
      >
        <option value="Last 6 months">Last 6 months</option>
        <option value="Last 1 year">Last 1 year</option>
        <option value="Last 2 years">Last 2 years</option>
        <option value="Last 5 years">Last 5 years</option>
      </select>
    </div>
  );
};

export default DateRangeSelector;
