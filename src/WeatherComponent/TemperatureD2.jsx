//Due to API subscription constraints, I will have to make do with local storage data rather than fetch the actual API.
import { useState, useEffect } from "react";
import fiveDayForecast from "./WeatherLocal";

function TemperatureD2({ temp }) {
  const [sidePhoto, setSidePhoto] = useState(
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTgzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE1MDQ0MzY&ixlib=rb-1.2.1&q=80&w=400"
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
      <div class='w-7xl bg-base-100'>
        <div class='hero-content flex-col lg:flex-row-reverse'>
          <img src={sidePhoto} className='max-w-sm mask mask-pentagon' />
          <div>
            <div className='text-3xl font-bold font-serif'>
              Play your activities by ear for tomorrow? The weather is hard to
              divine.
            </div>
            <br />
            <div className='text-2xl font-serif'>
              Tomorrow's status is likely to be...{" "}
              {fiveDayForecast.list[1].weather[0].description}
            </div>
            <div className='text-2xl font-serif'>
              It's gonna be {fiveDayForecast.list[1].main.temp}&#8451;, but will
              feel like {fiveDayForecast.list[1].main.feels_like}. &#8451;
            </div>
            <div className='text-2xl font-serif'>
              The humidity could be... {fiveDayForecast.list[1].main.humidity}%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureD2;

// api.openweathermap.org/data/2.5/forecast?lat=1&lon=103&appid=8edd7eafe7e70db5b99d053ea15266ec&units=metric
