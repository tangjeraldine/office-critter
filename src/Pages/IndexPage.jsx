/* eslint-disable */

import { Link } from "react-router-dom";
import { useEffect } from "react";
import ClockComponent from "./ClockComponent";
import DateComponent from "./DateComponent";

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
    // console.log(name);
  };

  return (
    <div className='text-center text-neutral-content max-w-4xl text-white'>
      <div className='max-w-max space-y-10'>
        <br />
        <div className='mb-8 text-7xl space-y-10'>
          <ClockComponent />
          <DateComponent />
        </div>{" "}
        <div>
          <img src={simp.image} className='max-h-44 float-left space-y-10' />
          <h2 className='mb-8 text-2xl font-mono space-y-10'>
            "{simp.quote}"
          </h2>{" "}
          <h4 className='mb-5 text-2xl font-mono space-y-10'>
            - {simp.character}
          </h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className='mb-7 text-5xl font-bold'>Hello,</h1>
      <form action='/home' method='get'>
        <input
          type='text'
          placeholder='Enter your name here'
          className='input input-bordered input-secondary w-full max-w-xs text-black text-2xl'
          onChange={handleName}
        />
        <br />
        <h2 className='mb-5 text-3xl'>We're here to help you focus.</h2>
        <h2>
          <button className='btn btn-black text-white'>
            {" "}
            <Link to='/home'>Let's Get Started</Link>
          </button>
        </h2>
      </form>

      <br />
    </div>
  );
}

export default RootPage;
