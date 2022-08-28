import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import TemperatureD1 from "../WeatherComponent/TemperatureD1";
import TemperatureD2 from "../WeatherComponent/TemperatureD2";
import TemperatureD3 from "../WeatherComponent/TemperatureD3";
import OverseasTemp from "../WeatherComponent/OverseasTemp";
import OverseasFav from "../WeatherComponent/OverseasFav";
import OverseasButtons from "../WeatherComponent/OverseasButtons";

function WeatherPage() {
  const [temp, setTemp] = useState({});
  const [country, setCountry] = useState("");
  const [favArray, setFavArray] = useState([]);
  const [overseasW, setOverseasW] = useState({});

  useEffect(() => {
    const openweathermapURL =
      "https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=8edd7eafe7e70db5b99d053ea15266ec&units=metric";
    fetch(openweathermapURL)
      .then((response) => response.json())
      .then((data) => setTemp(data));
  }, []);
  // console.log(typeof temp);

  return (
    <div className='text-emerald-900'>
      <NavBar />
      <br />
      <h2 className='mb-8 text-3xl text-white font-bold '>
        This is the Weather Page
      </h2>
      <div className='carousel max-w-7xl'>
        <div id='item1' className='carousel-item w-full'>
          <TemperatureD1 temp={temp} />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <TemperatureD2 temp={temp} />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <TemperatureD3 temp={temp} />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <OverseasTemp
            temp={temp}
            country={country}
            setCountry={setCountry}
            overseasW={overseasW}
            setOverseasW={setOverseasW}
            favArray={favArray}
            setFavArray={setFavArray}
          />
        </div>
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        <a href='#item1' className='btn btn-s'>
          Today.
        </a>
        <a href='#item2' className='btn btn-s'>
          Tomorrow.
        </a>
        <a href='#item3' className='btn btn-s'>
          The Day After.
        </a>
        <a href='#item4' className='btn btn-s'>
          Search Overseas.
        </a>
      </div>
      <br />

      <OverseasButtons
        favArray={favArray}
        setFavArray={setFavArray}
        temp={temp}
        country={country}
        overseasW={overseasW}
      />
    </div>
  );
}

export default WeatherPage;
