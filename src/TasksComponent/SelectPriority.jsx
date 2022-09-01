import ProductivityStats from "./ProductivityStats";
import lofi_generator from "../EntertainmentComponent/lofi_generator.png";
import Lofi from "../Pages/Lofi.mp3";

function SelectPriority({
  count,
  setCount,
  highest,
  setHighest,
  second,
  setSecond,
  third,
  setThird,
  fourth,
  setFourth,
  text,
  setText,
  setHighestDone,
  highestDone,
  setSecondDone,
  secondDone,
  setThirdDone,
  thirdDone,
  setFourthDone,
  fourthDone,
}) {
  const handleText = (e) => {
    setText(e.target.value);
  };
  // console.log(typeof text);

  const handleHighest = () => {
    if (text === "") {
      alert("Key in something!");
    } else {
      setHighest([...highest, text]);
      setCount(count + 1);
      // console.log(highest);
    }
  };

  const handleSecond = () => {
    if (text === "") {
      alert("Key in something!");
    } else {
      setSecond([...second, text]);
      setCount(count + 1);
    }
  };

  const handleThird = () => {
    if (text === "") {
      alert("Key in something!");
    } else {
      setThird([...third, text]);
      setCount(count + 1);
    }
  };

  const handleFourth = () => {
    if (text === "") {
      alert("Key in something!");
    } else {
      setFourth([...fourth, text]);
      setCount(count + 1);
    }
  };
  const music = new Audio(Lofi);
  const handleMusic = () => {
    music.play();
  };
  const stopMusic = () => {
    music.pause();
  };

  return (
    <div>
      <div className='grid grid-cols-3 gap-2 flex items-center'>
        <img
          onMouseOver={handleMusic}
          onMouseOut={stopMusic}
          src={lofi_generator}
          className='rounded-md h-48  float-right col-span-1 cursor-pointer'
        />
        <div className='grid col-span-2 grid-rows-2'>
          <textarea
            onChange={handleText}
            className='textarea textarea-info text-teal-700 text-2xl font-serif max-w-full'
            placeholder='Add task to begin! To chill out, place your mouse over lofi girl to play audio.'></textarea>
          <div className='dropdown dropdown-bottom '>
            <label tabindex='0' class='btn btn-black w-72'>
              How important is it?
            </label>
            <ul
              tabindex='0'
              class='dropdown-content menu shadow bg-base-100 rounded-box w-80'>
              <li onClick={handleHighest} className='text-red-700 '>
                <a>Important and Urgent. Don't procrastinate!</a>
              </li>
              <li onClick={handleSecond} className='text-slate-700'>
                <a>It's Important, But Make Time For It Later.</a>
              </li>
              <li onClick={handleThird} className='text-slate-500'>
                <a>Urgent, But... Meh. Delegate/Reschedule?</a>
              </li>
              <li onClick={handleFourth} className='text-slate-300 '>
                <a>Can Live Without. Cancel/Ignore?</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <ProductivityStats
        setHighest={setHighest}
        highest={highest}
        setSecond={setSecond}
        second={second}
        setThird={setThird}
        third={third}
        setFourth={setFourth}
        fourth={fourth}
        setCount={setCount}
        count={count}
        setHighestDone={setHighestDone}
        highestDone={highestDone}
        setSecondDone={setSecondDone}
        secondDone={secondDone}
        setThirdDone={setThirdDone}
        thirdDone={thirdDone}
        setFourthDone={setFourthDone}
        fourthDone={fourthDone}
      />
    </div>
  );
}

export default SelectPriority;
//
