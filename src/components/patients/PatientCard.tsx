import useNavigateToOverviewTab from "@/hooks/useNavigateToOverviewTab";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type patientCardType = {
  profile_picture: string;
  name: string;
  gender: string;
  age: number;
  isSelected: boolean | null;
};

const PatientCard = ({
  profile_picture,
  name,
  gender,
  age,
  isSelected,
}: patientCardType) => {
  const navigateToOverviewTab = useNavigateToOverviewTab();

  return (
    <Link
      href="#"
      onClick={navigateToOverviewTab}
      className={`flex items-center outline-none focus:bg-unnamed-activestate-bg-2 hover:bg-unnamed-activestate-bg-2/40 ${
        isSelected ? "bg-unnamed-activestate-bg-2" : "bg-unnamed-color-ffffff"
      }`}
    >
      <div className="flex justify-between w-full h-12 m-4">
        <section className="flex gap-x-3">
          <Image
            src={profile_picture}
            width={48}
            height={48}
            alt="patient"
            className=" text-unnamed-color-072635"
          />

          <div className="flex flex-col justify-center">
            <p className="font-manrope font-bold text-sm leading text-unnamed-color-072635 text-left">
              {name}
            </p>
            <p className="font-manrope font-normal text-sm leading-5 text-unnamed-color-707070">
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
    </Link>
  );
};

export default PatientCard;
