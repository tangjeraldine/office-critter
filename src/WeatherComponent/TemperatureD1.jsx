import { useEffect, useState } from "react";

function TemperatureD1({ temp }) {
  const [sidePhoto, setSidePhoto] = useState(
    "https://images.unsplash.com/photo-1459478309853-2c33a60058e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTgzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE1MDQ0MzY&ixlib=rb-1.2.1&q=80&w=400"
  );

  useEffect(() => {
    const sidePhotoURL =
      "https://api.unsplash.com/photos/random?client_id=GdUVswihOUZQbPBprLpHirAHvbdsxnrRq_98puNbwCs&orientation=landscape&query=nature";
    fetch(sidePhotoURL)
      .then((response) => response.json())
      .then((data) => setSidePhoto(data?.urls?.small));
  }, []);

  return (
    <div>
      <div class='max-w-7xl bg-base-100'>
        <div class='hero-content flex-col lg:flex-row-reverse'>
          <img src={sidePhoto} className='max-w-sm mask mask-hexagon' />
          <div>
            {" "}
            <div className='text-3xl font-bold font-serif'>
              Have plans for today? Let's see what the weather has in store for
              you.
            </div>{" "}
            <br />
            <div className='text-2xl font-serif'>
              Today's status... {temp?.weather?.[0]?.description}
            </div>
            <div className='text-2xl font-serif'>
              It's {temp?.main?.temp}&#8451;, but feels like{" "}
              {temp?.main?.feels_like}. &#8451;
            </div>
            <div className='text-2xl font-serif'>
              The humidity is... {temp?.main?.humidity}%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureD1;

// api.openweathermap.org/data/2.5/forecast?lat=1&lon=103&appid=8edd7eafe7e70db5b99d053ea15266ec&units=metric
