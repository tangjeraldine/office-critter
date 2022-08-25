import { Link } from "react-router-dom";

function HomePage({ name, wp }) {
  return (
    <div className='max-w-md'>
      <h1 className='mb-5 text-5xl font-bold text-center'>Good morning,</h1>
      <h1 className='mb-9 text-5xl font-bold text-center'>{name}!</h1>
      <p className='mb-9 text-2xl'>
        Start your day with a coffee, or one of the following.
      </p>
      <ul className='menu menu-horizontal bg-secondary rounded-box p-6'>
        <li>
          <Link to='/tasks'>Today's Tasks?</Link>
        </li>
        <li>
          <Link to='/guide'>About This...</Link>
        </li>
        <li>
          <Link to='/weather'>#Skies.</Link>
        </li>

        <li tabindex='0'>
          <span>All About $.</span>
          <ul className='rounded-box bg-base-100 p-2'>
            <li>
              <Link to='/currency'>Currency Conversion</Link>
            </li>
            <li>
              <Link to='/stocks'>Most Active Stocks</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to='/entertainment'>Brain Fart!</Link>
        </li>
      </ul>
      {/* <button class='btn btn-primary'>Get Started</button> */}
    </div>
  );
}

export default HomePage;

{
  /* <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused --> */
}
