"use client";
import { useEffect, useState } from "react";
import Clock from "react-clock";

const AnalogClock = () => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Clock value={value} className="shadow-2xl rounded-full" />
    </div>
  );
};

export default AnalogClock;
