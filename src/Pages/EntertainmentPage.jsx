// import BDTrivia from "../EntertainmentComponent/BirthdayTrivia";
import GiveNumberTrivia from "../EntertainmentComponent/GiveNumberTrivia";
// import NumTrivia from "../EntertainmentComponent/NumTrivia";
import NewYorkTimes from "../EntertainmentComponent/NewYorkTimesBestSeller";
import YoutubeVids from "../EntertainmentComponent/YoutubeCarousel";
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
      <div>
        <TaskReminder
          highest={highest}
          second={second}
          third={third}
          fourth={fourth}
        />
        <div className='grid grid-cols-2 gap-4'>
          <YoutubeVids />
          <GiveNumberTrivia />
        </div>

        <div className='divider'></div>
        <h2 className='mb-5 text-2xl font-bold text-white'>
          Bestsellers Now Trending On The New York Times:
        </h2>
        <NewYorkTimes />
      </div>
    </div>
  );
}

export default EntertainmentPage;
