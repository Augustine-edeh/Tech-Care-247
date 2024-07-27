import Image from "next/image";

const SearchPatients = ({ className }: { className: string }) => {
  return (
    <div className={`${className} flex justify-between`}>
      <h3 className="font-manrope font-extrabold text-xl leading-[33px] text-unnamed-color-072635 text-left">
        Patients
      </h3>
      <Image
        src="/search_FILL0_wght300_GRAD0_opsz24.svg"
        width={18}
        height={18}
        alt="search"
      />
    </div>
  );
};

export default SearchPatients;
