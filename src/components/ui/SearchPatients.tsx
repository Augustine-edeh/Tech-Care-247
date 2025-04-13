"use client";

import { useState, useRef, useEffect } from "react";
import { ClassNameType } from "../../../types/Ui";
import { Search, X } from "lucide-react";

const SearchPatients = ({
  className,
  onSearch,
}: ClassNameType & { onSearch: (query: string) => void }) => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleSearchInput = () => {
    setIsSearchClicked((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => inputRef.current?.focus(), 200);
        console.log("Search input is opened");
      } else {
        onSearch("");
        console.log("Search input is closed");
      }
      return next;
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  // Escape key listener
  useEffect(() => {
    if (!isSearchClicked) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleSearchInput();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearchClicked]);

  return (
    <div
      className={`${className} relative flex justify-between items-center p-2 bg-gray-50 rounded-lg shadow-md transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center w-full relative">
        {/* Title fades out and slides left */}
        <h3
          className={`font-manrope font-extrabold text-xl text-gray-800 absolute left-4 transition-all duration-300 ease-in-out ${
            isSearchClicked
              ? "opacity-0 -translate-x-5 scale-95"
              : "opacity-100 translate-x-0 scale-100"
          }`}
        >
          Patients
        </h3>

        {/* Input fades in and expands */}
        <input
          ref={inputRef}
          type="text"
          className={`h-10 px-4 w-full border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring focus:ring-blue-200 transition-all duration-300 ease-in-out ${
            isSearchClicked
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-1 pointer-events-none"
          }`}
          placeholder="Search patients..."
          aria-label="Search patients"
          onChange={handleInputChange}
          onClick={(e) => e.stopPropagation()}
        />

        {/* Toggle Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleSearchInput();
          }}
          className="absolute right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-blue-200 transition-all duration-300 ease-in-out"
          aria-label={isSearchClicked ? "Close search" : "Open search"}
        >
          {isSearchClicked ? (
            <X className="w-5 h-5 text-gray-600" />
          ) : (
            <Search className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchPatients;
