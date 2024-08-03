"use client";
import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p className="font-manrope text-xl leading-[33px] text-unnamed-color-072635">
        {time.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default DigitalClock;
