"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date(
  "2026-09-14T12:00:00+05:30"
).getTime();

const INITIAL_TIME = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  done: false,
};

function getTimeLeft() {
  const difference = EVENT_DATE - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      done: true,
    };
  }

  return {
    days: Math.floor(difference / 86400000),

    hours: Math.floor(
      (difference / 3600000) % 24
    ),

    minutes: Math.floor(
      (difference / 60000) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    ),

    done: false,
  };
}

export default function Countdown() {
  const [time, setTime] = useState(INITIAL_TIME);

  useEffect(() => {
    setTime(getTimeLeft());

    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-pad bg-[#5b3d4a] text-[#fffdf8]">
      <div className="mx-auto max-w-5xl text-center">
        <p className="font-hand text-xl text-[#f7cdbb]">
          सोहळ्याची आतुरता...
        </p>

        <h2 className="mt-3 text-4xl font-extrabold md:text-6xl">
          बारसं सोहळ्यासाठी
        </h2>

        {time.done ? (
          <p className="mt-12 text-2xl font-bold text-[#fff1bc] md:text-3xl">
            🌸 आज आपल्या चिमुकल्याचा बारसं सोहळा! 🌸
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            <TimeBox value={time.days} label="दिवस" />
            <TimeBox value={time.hours} label="तास" />
            <TimeBox value={time.minutes} label="मिनिटे" />
            <TimeBox value={time.seconds} label="सेकंद" />
          </div>
        )}
      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
      <div className="text-4xl font-extrabold md:text-6xl">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-2 text-sm text-[#f7cdbb]">
        {label}
      </div>
    </div>
  );
}