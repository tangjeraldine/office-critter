/* eslint-disable */

import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

function LayoutPage({ wpTheme, setWpTheme, wp, setWP }) {
  return (
    <div
      className='hero w-full'
      style={{
        backgroundImage: `url(${wp})`,
        backgroundSize: "cover",
        width: "1500px",
        height: "1200px",
      }}>
      <div className='hero-overlay bg-opacity-40'></div>
      <div className='text-center text-neutral-content h-screen w-10xl'>
        <div className='max-w-7xl'>
          <Outlet />
          <br />
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;
