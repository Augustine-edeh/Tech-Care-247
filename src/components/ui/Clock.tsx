import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import "react-clock/dist/Clock.css";

const Clock = () => {
  return (
    <div className="bg-unnamed-color-ffffff h-full p-5">
      <h3 className="font-manrope font-extrabold text-2xl leading-8 text-unnamed-color-072635 mb-10">
        Clock
      </h3>

      <section className="xl:hidden">
        <DigitalClock />
      </section>

      <section className="hidden lg:flex justify-center items-center">
        <AnalogClock />
      </section>
    </div>
  );
};

export default Clock;
