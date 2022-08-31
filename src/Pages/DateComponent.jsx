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
  let currentDay;
  if (currentGMT[0] === "Mon") {
    currentDay = "Monday";
  } else if (currentGMT[0] === "Tue,") {
    currentDay = "Tuesday";
  } else if (currentGMT[0] === "Wed,") {
    currentDay = "Wednesday";
  } else if (currentGMT[0] === "Thu,") {
    currentDay = "Thursday";
  } else if (currentGMT[0] === "Fri,") {
    currentDay = "Friday";
  } else if (currentGMT[0] === "Sat,") {
    currentDay = "Saturday";
  } else if (currentGMT[0] === "Sun,") {
    currentDay = "Thursday";
  }

  return (
    <h3>
      {currentDay}, {currentGMT[1]} {currentGMT[2]} {currentGMT[3]}
    </h3>
  );
}

export default DateComponent;

// className=' text-9xl '
