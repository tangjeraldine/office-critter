import BDTrivia from "../EntertainmentComponent/BirthdayTrivia";
import GiveNumberTrivia from "../EntertainmentComponent/GiveNumberTrivia";
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
      <h3 className='mb-5 text-3xl font-bold text-black'>
        Entertainment that's totally SFW. ;){" "}
      </h3>
      <br />
      <div className='grid-cols-4'>
        <TaskReminder
          highest={highest}
          second={second}
          third={third}
          fourth={fourth}
        />
        <NumTrivia />
        <div className='divider'></div>
        <GiveNumberTrivia />
        <div className='divider'></div>
        <BDTrivia />
      </div>
    </div>
  );
}

export default EntertainmentPage;
