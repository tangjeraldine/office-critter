/* eslint-disable */

import { Link, Outlet } from "react-router-dom";
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

function LayoutPage({ wpTheme, setWpTheme, wp, setWP }) {
  const fetchWP = () => {
    const WPURL = `https://api.unsplash.com/photos/random?client_id=GdUVswihOUZQbPBprLpHirAHvbdsxnrRq_98puNbwCs&orientation=portrait&query=${wpTheme}`;
    console.log(WPURL);

    fetch(WPURL)
      .then((response) => response.json())
      .then((data) => setWP(data?.urls?.raw));
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

  return (
    <div
      className='hero w-full'
      style={{
        backgroundImage: `url(${wp})`,
        backgroundSize: "cover",
        width: "1500px",
        height: "1000px",
      }}>
      <div className='hero-overlay bg-opacity-40'></div>
      <div className='text-center text-neutral-content h-screen w-10xl'>
        <div className='max-w-7xl'>
          <Outlet />
          <br />
        </div>
      </div>
      <div className='dropdown dropdown-top absolute bottom-0 '>
        <label tabindex='0' className='btn glass absolute bottom-0 sticky'>
          Change my environment
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

export default LayoutPage;
