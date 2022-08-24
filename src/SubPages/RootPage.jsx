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
    <div
      className='flex flex-col justify-center items-center'
      style={{
        backgroundImage: `url(${wp})`,
        backgroundSize: "cover",
        width: "1200px",
        height: "1000px",
      }}>
      <h2>This is the root page</h2>
      <div className='flex flex-col justify-center items-center'>
        <h2 style={{ backgroundColor: "white" }}>{simp.quote}</h2>
        <h4 style={{ backgroundColor: "white" }}>{simp.character}</h4>
        <img
          className='flex flex-col justify-center items-center'
          src={simp.image}
          style={{ height: "200px" }}
        />
      </div>
      <br />
      <h1 className='text-3xl font-bold' style={{ backgroundColor: "white" }}>
        Hello,
      </h1>
      <input
        type='text'
        placeholder='Enter your name here'
        className='input input-bordered input-secondary w-full max-w-xs'
        onChange={handleName}
      />
      <h2>
        <button className='btn btn-warning'>
          {" "}
          <Link to='/home'>Let's Get Started</Link>
        </button>
      </h2>
      <br />
      <div className='dropdown dropdown-top'>
        <label tabindex='0' className='btn m-1'>
          What Would You Like To See Today?
        </label>
        <ul
          tabindex='0'
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
          <li>
            <a onClick={handlePlants}>Plants</a>
          </li>
          <li>
            <a onClick={handleUrban}>Urban</a>
          </li>
          <li>
            <a onClick={handleHome}>Home</a>
          </li>
          <li>
            <a onClick={handleFood}>Food</a>
          </li>
          <li>
            <a onClick={handleCity}>City</a>
          </li>
          <li>
            <a onClick={handleVacation}>Vacation</a>
          </li>
          <li>
            <a onClick={handleMinimalism}>Minimalism</a>
          </li>
          <li>
            <a onClick={handleCP}>CyberPunk</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RootPage;
