import { useState, useEffect } from "react";

function DateComponent() {
  //   const now = new Date();
  //   console.log(now.toLocaleTimeString());
  const [now, setNow] = useState(new Date());
  function refreshInterval() {
    setNow(new Date());
  }
  useEffect(() => {
    const timer = setInterval(refreshInterval, 1000);
  }, []);

  const currentGMT = now.toGMTString().split(" "); // ['Sun,', '28', 'Aug', '2022', '16:08:07', 'GMT']]
  //   console.log(currentGMT);
  const currentDay = currentGMT[0].split("");

  return (
    <h3>
      {currentDay[0]}
      {currentDay[1]}
      {currentDay[2]}day, {currentGMT[1]} {currentGMT[2]} {currentGMT[3]}
    </h3>
  );
}

export default DateComponent;

// className=' text-9xl '
