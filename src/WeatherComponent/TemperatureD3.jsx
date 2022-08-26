import { useEffect, useState } from "react";
import fiveDayForecast from "./WeatherLocal";

function TemperatureD3({ temp }) {
  const [sidePhoto, setSidePhoto] = useState(
    "https://images.unsplash.com/photo-1422205512921-12dac7b3b603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTgzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE1MDQ0MzY&ixlib=rb-1.2.1&q=80&w=400"
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
          <img src={sidePhoto} className='max-w-sm mask mask-diamond' />
          <div>
            <div className='text-3xl font-bold font-serif'>
              It's still a good idea to bring an umbrella on your way out.
            </div>
            <br />
            <div className='text-2xl font-serif'>
              The likely status is...{" "}
              {fiveDayForecast.list[2].weather[0].description}
            </div>
            <div className='text-2xl font-serif'>
              It's probably gonna be {fiveDayForecast.list[2].main.temp}&#8451;,
              but will feel like {fiveDayForecast.list[2].main.feels_like}.
              &#8451;
            </div>
            <div className='text-2xl font-serif'>
              The humidity will probably be...{" "}
              {fiveDayForecast.list[2].main.humidity}%.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureD3;

// api.openweathermap.org/data/2.5/forecast?lat=1&lon=103&appid=8edd7eafe7e70db5b99d053ea15266ec&units=metric
