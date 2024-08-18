import Image from "next/image";

const PatientVitals = () => {
  return (
    <section className="flex flex-wrap justify-center gap-5 md:justify-between">
      {/* Vital card (respiratory rate) */}
      <div className="flex flex-col gap-y-4 w-[228px] h-[242px] p-4 rounded-xl bg-[#E0F3FA]">
        <Image
          src="/respiratory rate.svg"
          width={96}
          height={96}
          alt="respiratory rate"
        />

        <div>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`Respiratory rate`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">
            {`20 bpm`}
          </p>
        </div>

        <div className="flex gap-2">
          <Image
            src={`/Arrow${true ? "Down" : "Up"}.svg`}
            width={10}
            height={5}
            alt="indicator"
          />
          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left">{`Normal`}</p>
        </div>
      </div>

      {/* Vital card (temperature) */}
      <div className="flex flex-col gap-y-4 w-[228px] h-[242px] p-4 rounded-xl bg-[#FFE6E9]">
        <Image src="/temperature.svg" width={96} height={96} alt="indicator" />

        <div>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`Temperature`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">
            {`98.6`}&deg; F
          </p>
        </div>

        <div className="flex gap-2">
          <Image
            src={`/Arrow${true ? "Down" : "Up"}.svg`}
            width={10}
            height={5}
            alt="indicator"
          />
          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left">{`Normal`}</p>
        </div>
      </div>

      {/* Vital card (heart rate) */}
      <div className="flex flex-col gap-y-4 w-[228px] h-[242px] p-4 rounded-xl bg-[#FFE6F1]">
        <Image src="/HeartBPM.svg" width={96} height={96} alt="indicator" />

        <div>
          <p className="font-manrope font-medium text-base leading-[22px] text-unnamed-color-072635 text-left capitalize">
            {`Heart rate`}
          </p>
          <p className="font-manrope font-extrabold text-[30px] leading-[41px] text-unnamed-color-072635 text-left">
            {`78 bpm`}
          </p>
        </div>

        <div className="flex gap-2">
          <Image
            src={`/Arrow${true ? "Down" : "Up"}.svg`}
            width={10}
            height={5}
            alt="indicator"
          />
          <p className="font-manrope font-normal text-sm leading-[19px] text-unnamed-color-072635 text-left">
            {`Lower than Average`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PatientVitals;
