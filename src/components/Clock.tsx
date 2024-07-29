"use client";
import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`${"order-1 lg:order-3 lg:col-span-4 xl:order-3 xl:col-span-3 bg-unnamed-color-ffffff mt-[14px]"} p-5 rounded-2xl`}
    >
      <h3 className="font-manrope font-extrabold text-2xl leading-[33px] text-unnamed-color-072635">
        Clock
      </h3>
      <p className="font-manrope text-xl leading-[33px] text-unnamed-color-072635">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default Clock;
