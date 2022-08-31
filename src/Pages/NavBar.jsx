import { Link } from "react-router-dom";
import ClockComponent from "./ClockComponent";
import DateComponent from "./DateComponent";

function NavBar({ wpTheme, setWpTheme, wp, setWP }) {
  const fetchWP = () => {
    const WPURL = `https://api.unsplash.com/photos/random?client_id=GdUVswihOUZQbPBprLpHirAHvbdsxnrRq_98puNbwCs&orientation=landscape&query=${wpTheme}`;
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
    <div className='absolute top-0 sticky font-serif text-1xl text-black '>
      <div class='navbar bg-base-100 rounded-md'>
        <div class='navbar-start'>
          <Link to='/' class='btn btn-ghost normal-case text-xl'>
            {" "}
            <img
              src='https://cdn-icons-png.flaticon.com/512/4727/4727424.png'
              className='h-12'
            />
          </Link>
          <DateComponent className='text-1xl' />
          (<ClockComponent className='text-1xl ' />)
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
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'>
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul className='p-2 bg-white'>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
