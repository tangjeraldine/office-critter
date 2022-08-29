import { useEffect, useState } from "react";
import OverseasFav from "./OverseasFav";

function OverseasTemp({
  country,
  setCountry,
  favArray,
  setFavArray,
  overseasW,
  setOverseasW,
}) {
  const [sidePhoto, setSidePhoto] = useState(
    "https://images.unsplash.com/photo-1503264116251-35a269479413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTgzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjE1MDQ5Nzc&ixlib=rb-1.2.1&q=80&w=400"
  );

  useEffect(() => {
    const sidePhotoURL =
      "https://api.unsplash.com/photos/random?client_id=GdUVswihOUZQbPBprLpHirAHvbdsxnrRq_98puNbwCs&orientation=landscape&query=nature";
    fetch(sidePhotoURL)
      .then((response) => response.json())
      .then((data) => setSidePhoto(data?.urls?.small));
  }, []);

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const submitCountry = () => {
    const openweathermapURL = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=8edd7eafe7e70db5b99d053ea15266ec&units=metric`;
    fetch(openweathermapURL)
      .then((response) => response.json())
      .then((data) => setOverseasW(data));
  };

  return (
    <div>
      <div class='w-7xl bg-base-100'>
        <div class='hero-content flex-col lg:flex-row-reverse'>
          <img src={sidePhoto} className='max-w-sm mask mask-circle' />
          <div className='text-3xl font-bold font-serif'>
            Interested to know what other parts of the world feels like at this
            moment? <br />
            <br />
            <form>
              {" "}
              <input
                type='text'
                placeholder='Enter city or country name here'
                class='input input-bordered input-success w-full max-w-xs font-mono text-2xl'
                onChange={handleCountry}
              />
              {/* modal dialogue box containing queried info to appear */}
              <label
                for='my-modal-4'
                class='btn modal-button'
                onClick={submitCountry}>
                Check weather
              </label>
              <input type='checkbox' id='my-modal-4' class='modal-toggle' />
              <label for='my-modal-4' class='modal cursor-pointer'>
                <label class='modal-box relative' for=''>
                  {/* queried info stored in component below */}
                  <OverseasFav
                    overseasW={overseasW}
                    country={country}
                    favArray={favArray}
                    setFavArray={setFavArray}
                  />
                </label>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverseasTemp;

// api.openweathermap.org/data/2.5/forecast?lat=1&lon=103&appid=8edd7eafe7e70db5b99d053ea15266ec&units=metric
