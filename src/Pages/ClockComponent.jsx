import { useState, useEffect } from "react";

function ClockComponent() {
  //   const now = new Date();
  //   console.log(now.toLocaleTimeString());
  const [now, setNow] = useState(new Date());
  function refreshInterval() {
    setNow(new Date());
  }
  useEffect(() => {
    const timer = setInterval(refreshInterval, 1000);
  }, []);

  //   console.log(now);

  return <h3>{now.toLocaleTimeString()}</h3>;
}

export default ClockComponent;

// className=' text-9xl '
