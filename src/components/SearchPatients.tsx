"use client";

import { useState } from "react";
import { ClassNameType } from "../../types/Ui";
import { Search } from "lucide-react";

const SearchPatients = ({ className }: ClassNameType) => {
  const [isSearcheClicked, setIsSearcheClicked] = useState<boolean>(false);

  const showSearchInput = () => setIsSearcheClicked((prev) => !prev);

  return (
    <div className={`${className} flex justify-between items-center`}>
      <div className="h-8">
        {isSearcheClicked ? (
          <input type="text" className="h-full" />
        ) : (
          <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
            Patients
          </h3>
        )}
      </div>

      <Search onClick={showSearchInput} className="cursor-pointer" />
    </div>
  );
};

export default SearchPatients;
