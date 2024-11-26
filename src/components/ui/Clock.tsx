import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import "react-clock/dist/Clock.css";

const Clock = () => {
  return (
    <div className="bg-unnamed-color-ffffff xl:h-full p-5">
      <div className="flex justify-between">
        <h3 className="font-manrope font-extrabold text-2xl leading-8 text-unnamed-color-072635 xl:mb-10">
          Clock
        </h3>

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
