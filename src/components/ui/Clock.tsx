import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import "react-clock/dist/Clock.css";
import { ClassNameType } from "../../../types/Ui";
import clsx from "clsx";

type ClockProps = ClassNameType & {
  hasLabel?: boolean;
};

const Clock = ({ className, hasLabel = true }: ClockProps) => {
  return (
    <div
      className={clsx(
        "bg-unnamed-color-ffffff xl:h-full",
        !hasLabel ? "px-4 py-[1.5px] rounded-full" : "p-5",
        className
      )}
    >
      <div className="flex justify-between">
        {hasLabel && (
          <h3 className="font-manrope font-extrabold text-2xl leading-8 text-unnamed-color-072635 xl:mb-10">
            Clock
          </h3>
        )}

        <section className="xl:hidden">
          <DigitalClock />
        </section>
      </div>

      <section className="hidden xl:flex justify-center items-center">
        <AnalogClock />
      </section>
    </div>
  );
};

export default Clock;
