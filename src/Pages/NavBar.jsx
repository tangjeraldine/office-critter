import { Link } from "react-router-dom";
import ClockComponent from "./ClockComponent";
import DateComponent from "./DateComponent";

function NavBar() {
  return (
    <div className='absolute top-0 sticky font-serif text-1xl text-emerald-900'>
      <div class='navbar bg-base-100'>
        <div class='navbar-start'>
          <Link to='/' class='btn btn-ghost normal-case text-xl'>
            {" "}
            <img
              src='https://cdn-icons-png.flaticon.com/512/1584/1584961.png'
              className='h-14'
            />
          </Link>
          <ClockComponent className='text-1xl' />
          <DateComponent className='text-1xl' />
        </div>
        <div class='navbar-center hidden lg:flex'>
          <ul class='menu menu-horizontal p-0'>
            <li>
              <Link to='/tasks'>Today's Tasks?</Link>
            </li>
            <li>
              <Link to='/guide'>About This...</Link>
            </li>
            <li>
              <Link to='/weather'>#Skies.</Link>
            </li>

            <li>
              <Link to='/entertainment'>Brain Fart!</Link>
            </li>
            <li tabindex='0'>
              <a>
                Change My Wallpaper.
                <svg
                  class='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul class='p-2'>
                <li>
                  <Link to='/currency'>Currency Conversion</Link>
                </li>
                <li>
                  <Link to='/stocks'>Most Active Stocks</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
