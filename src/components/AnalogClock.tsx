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
      <p>Current time:</p>
      <Clock value={value} className="bg-blue-400" />
    </div>
  );
};

export default AnalogClock;
