import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import "react-clock/dist/Clock.css";

const Clock = () => {
  return (
    <div
      className={`${"order-1 lg:order-3 lg:col-span-4 xl:order-3 xl:col-span-3 bg-unnamed-color-ffffff mt-[14px]"} p-5 rounded-2xl`}
    >
      <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635 mb-10">
        Clock
      </h3>

      <section className="lg:hidden">
        <DigitalClock />
      </section>

      <section className="hidden  lg:flex justify-center items-center">
        <AnalogClock />
      </section>
    </div>
  );
};

export default Clock;
