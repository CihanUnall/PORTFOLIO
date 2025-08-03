"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  return (
    <div className="clock">
      <div>
        {formattedDate}&nbsp;&nbsp;
        {formattedTime}
      </div>
    </div>
  );
}
