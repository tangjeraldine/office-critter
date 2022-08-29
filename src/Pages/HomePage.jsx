import { Link } from "react-router-dom";
import ClockComponent from "./ClockComponent";
import DateComponent from "./DateComponent";

function HomePage({ name, wp }) {
  return (
    <div className='max-w-full text-white space-y-10'>
      <br />
      <br />
      <div className='mb-8 text-6xl space-y-10'>
        <ClockComponent />
        <DateComponent />
      </div>{" "}
      <h1 className='mb-5 text-5xl font-bold text-center space-y-10'>
        Have a great day,
      </h1>
      <h1 className='mb-9 text-5xl font-bold text-center space-y-10'>
        {name}!
      </h1>
      <p className='mb-9 text-2xl space-y-10'>
        Start your day with a coffee, or one of the following.
      </p>
      <ul className='menu menu-horizontal bg-black rounded-box p-6 '>
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
      </ul>
    </div>
  );
}

export default HomePage;

{
  /* <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused --> */
}
