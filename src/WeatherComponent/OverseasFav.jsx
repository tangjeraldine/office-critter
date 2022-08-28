import { useState } from "react";

function OverseasFav({ overseasW, country, favArray, setFavArray }) {
  const [changeButton, setChangeButton] = useState("");
  const handleLike = () => {
    if (favArray.includes(country)) {
      setChangeButton("disabled");
    } else {
      setFavArray([...favArray, country]);
      setChangeButton(""); //! and setChangeButton doesnt change back
    }
  };
  console.log(country); //! how come country doesnt change anymore?
  console.log(favArray);

  return (
    <div>
      <div className='text-2xl mb-5 font-serif'>
        Status... {overseasW?.weather?.[0]?.description}
      </div>
      <div className='text-2xl mb-5 font-serif'>
        It's {overseasW?.main?.temp}&#8451; in {country} now, but feels like{" "}
        {overseasW?.main?.feels_like} &#8451;.
      </div>
      <div className='text-2xl mb-5 font-serif'>
        The humidity there is now {overseasW?.main?.humidity}%.
      </div>
      <button class='btn gap-2' disabled={changeButton} onClick={handleLike}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
          />
        </svg>
        Like this place!
      </button>
    </div>
  );
}
export default OverseasFav;
