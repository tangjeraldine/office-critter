/* eslint-disable */

import { Outlet } from "react-router-dom";

function LayoutPage({ wp }) {
  return (
    <div
      className='hero w-screen object-fill'
      style={{
        backgroundImage: `url(${wp})`,
      }}>
      <div className='hero-overlay bg-opacity-30'></div>
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
