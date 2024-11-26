import useNavigateToOverviewTab from "@/hooks/useNavigateToOverviewTab";
import Image from "next/image";

type patientCardType = {
  profile_picture: string;
  name: string;
  gender: string;
  age: number;
};

const PatientCard = ({
  profile_picture,
  name,
  gender,
  age,
}: patientCardType) => {
  const navigateToOverviewTab = useNavigateToOverviewTab();
  return (
    <a
      href="#"
      className="flex items-center h- 20 w-[353px bg-unnamed-color-ffffff outline-none focus:bg-unnamed-activestate-bg-2 hover:bg-unnamed-activestate-bg-2/40"
    >
      <div className="flex justify-between w-[317px w-full h-[48px] m-4">
        <section className="flex gap-x-3">
          <Image
            src={profile_picture}
            width={48}
            height={48}
            alt="patient"
            className=" text-unnamed-color-072635"
          />

          <div className="flex flex-col justify-center">
            <p className="font-manrope font-bold text-sm leading-[19px] text-unnamed-color-072635 text-left">
              {name}
            </p>
            <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-707070 text-left">
              {`${gender}, ${age}`}
            </p>
          </div>
        </section>

        <Image
          src="/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"
          width={18}
          height={4}
          alt="more info"
        />
      </div>
    </a>
  );
};

export default PatientCard;
