"use client";

import { useState, useRef } from "react";
import { ClassNameType } from "../../../types/Ui";
import { Search } from "lucide-react";

const SearchPatients = ({ className }: ClassNameType) => {
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const showSearchInput = () => {
    setIsSearchClicked((prev) => !prev);
    if (!isSearchClicked) {
      setTimeout(() => inputRef.current?.focus(), 0); // Focus input when visible
    }
  };

  return (
    <div className={`${className} flex justify-between items-center`}>
      <div className="h-8">
        {isSearchClicked ? (
          <input
            ref={inputRef}
            type="text"
            className="h-full border border-gray-300 px-2 rounded"
            placeholder="Search patients..."
            aria-label="Search patients"
          />
        ) : (
          <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
            Patients
          </h3>
        )}
      </div>

      <Search
        onClick={showSearchInput}
        className="cursor-pointer"
        aria-label="Toggle search input"
        aria-expanded={isSearchClicked}
      />
    </div>
  );
};

export default SearchPatients;
