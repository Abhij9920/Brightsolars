"use client";

import { useEffect, useState } from "react";

type CountUpProps = {
  targetNumber: number;
  duration?: number; // Duration in milliseconds
};

const CountUp: React.FC<CountUpProps> = ({ targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const increment = Math.min(
        Math.floor((progress / duration) * targetNumber),
        targetNumber
      );
      setCount(increment);
      if (increment < targetNumber) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [targetNumber, duration]);

  return <div className="text-xl md:text-4xl font-bold ">{count}</div>;
};

export default CountUp;
