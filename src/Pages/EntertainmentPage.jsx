// import BDTrivia from "../EntertainmentComponent/BirthdayTrivia";
// import GiveNumberTrivia from "../EntertainmentComponent/GiveNumberTrivia";
import NewYorkTimes from "../EntertainmentComponent/NewYorkTimesBestSeller";
import NumTrivia from "../EntertainmentComponent/NumTrivia";
import TaskReminder from "../EntertainmentComponent/TaskReminder";
import NavBar from "./NavBar";

function EntertainmentPage({
  wpTheme,
  setWpTheme,
  wp,
  setWP,
  highest,
  second,
  third,
  fourth,
}) {
  return (
    <div>
      <NavBar wpTheme={wpTheme} setWpTheme={setWpTheme} wp={wp} setWP={setWP} />
      <br />
      <h3 className='mb-5 text-3xl font-bold text-emerald-900 bg-white rounded-md'>
        Entertainment that's totally SFW. ;){" "}
      </h3>

      <div className='grid-cols-4'>
        <TaskReminder
          highest={highest}
          second={second}
          third={third}
          fourth={fourth}
        />
        <br />
        <NumTrivia />
        <div className='divider'></div>
        <h2 className='mb-5 text-2xl font-bold text-white'>
          What's Trending On The New York Times:
        </h2>
        <NewYorkTimes />
        <div className='divider'></div>
      </div>
    </div>
  );
}

export default EntertainmentPage;
