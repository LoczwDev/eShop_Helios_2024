import React, { useEffect, useState } from "react";

export const CountTimeContainer = () => {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23,
        59,
        59
      );

      const timeDiff = endOfDay - now;

      const hours = String(Math.floor(timeDiff / (1000 * 60 * 60))).padStart(2, '0');
      const minutes = String(Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const seconds = String(Math.floor((timeDiff % (1000 * 60)) / 1000)).padStart(2, '0');

      const remainingTimeString = `${hours}:${minutes}:${seconds}`;
      setRemainingTime(remainingTimeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="lg:py-3 md:py-3 py-5 px-3 flex lg:flex-row flex-col items-center lg:justify-between justify-center text-white">
      <h1 className="font-bold lg:text-2xl md:text-2xl text-3xl">Deal chớp nhoáng</h1>
      <div className="flex">
        <p className="text">Kết thúc sau :</p>
        <div>
          <span className="text-3xl font-bold">{remainingTime}</span>
        </div>
      </div>
    </div>
  );
};
