"use client";

import { useState, useRef } from "react";
import { ClassNameType } from "../../../types/Ui";
import { Search, X } from "lucide-react";

const SearchPatients = ({ className }: ClassNameType) => {
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleSearchInput = () => {
    setIsSearchClicked((prev) => !prev);
    if (!isSearchClicked) {
      setTimeout(() => inputRef.current?.focus(), 150); // Focus input when visible
    }
  };

  return (
    <div
      className={`${className} flex justify-between items-center p-2 bg-gray-50 rounded-lg shadow-md`}
    >
      <div className="h-10 flex items-center transition-all duration-300">
        {isSearchClicked ? (
          <input
            ref={inputRef}
            type="text"
            className="h-full px-4 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Search patients..."
            aria-label="Search patients"
          />
        ) : (
          <h3 className="font-manrope font-extrabold text-xl leading-8 text-gray-800 transition-all duration-300">
            Patients
          </h3>
        )}
      </div>

      <button
        onClick={toggleSearchInput}
        className="ml-3 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-200 transition-all duration-300"
        aria-label={isSearchClicked ? "Close search" : "Open search"}
      >
        {isSearchClicked ? (
          <X className="w-5 h-5 text-gray-600" />
        ) : (
          <Search className="w-5 h-5 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default SearchPatients;
