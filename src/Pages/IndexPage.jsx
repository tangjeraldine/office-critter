/* eslint-disable */

import { Link } from "react-router-dom";
import { useEffect } from "react";

const themes = [
  "Plants",
  "Urban",
  "Home",
  "Food",
  "City",
  "Vacation",
  "Minimalism",
  "CyberPunk",
];

function RootPage({
  name,
  setName,
  simp,
  setSimp,
  wpTheme,
  setWpTheme,
  wp,
  setWP,
}) {
  useEffect(() => {
    const simpsonsURL = "https://thesimpsonsquoteapi.glitch.me/quotes";
    fetch(simpsonsURL)
      .then((response) => response.json())
      .then((data) => setSimp(data[0]));
  }, []);

  const fetchWP = () => {
    const WPURL = `https://api.unsplash.com/photos/random?client_id=GdUVswihOUZQbPBprLpHirAHvbdsxnrRq_98puNbwCs&orientation=landscape&query=${wpTheme}`;
    console.log(WPURL);

    fetch(WPURL)
      .then((response) => response.json())
      .then((data) => setWP(data?.urls?.full));
  };
  const handlePlants = () => {
    setWpTheme("plant");
    fetchWP();
  };
  const handleUrban = () => {
    setWpTheme("urban");
    fetchWP();
  };
  const handleHome = () => {
    setWpTheme("home");
    fetchWP();
  };
  const handleFood = () => {
    setWpTheme("food");
    fetchWP();
  };
  const handleCity = () => {
    setWpTheme("city");
    fetchWP();
  };
  const handleVacation = () => {
    setWpTheme("vacation");
    fetchWP();
  };
  const handleMinimalism = () => {
    setWpTheme("minimalist");
    fetchWP();
  };
  const handleCP = () => {
    setWpTheme("cyberpunk");
    fetchWP();
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return (
    <div className='text-center text-neutral-content max-w-4xl'>
      <div className='max-w-max'>
        <h2 className='mb-8 text-3xl font-bold '>"{simp.quote}"</h2>{" "}
        <img src={simp.image} className='max-h-44 ' />
        <h4 className='mb-5 text-2xl font-bold'>{simp.character}</h4>
        <h1 className='mb-7 text-5xl font-bold'>Hello,</h1>
        <input
          type='text'
          placeholder='Enter your name here'
          className='input input-bordered input-secondary w-full max-w-xs'
          onChange={handleName}
        />
        <p className='mb-5 text-2xl'>We know how busy your day is.</p>
        <p className='mb-5 text-2xl'>We're here to help you focus.</p>
        <h2>
          <button className='btn btn-secondary'>
            {" "}
            <Link to='/home'>Let's Get Started</Link>
          </button>
        </h2>
        <br />
      </div>
    </div>
  );
}

export default RootPage;
