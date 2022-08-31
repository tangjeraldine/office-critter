import { useState } from "react";
import HighPriority from "../TasksComponent/HighPriority";
import ImptNotUrgent from "../TasksComponent/ImptNotUrgt";
import LowPriority from "../TasksComponent/LowPriority";
import NotImptButUrgt from "../TasksComponent/NotImptButUrgt";
import SelectPriority from "../TasksComponent/SelectPriority";
import ProductivityStats from "../TasksComponent/ProductivityStats";
import NavBar from "./NavBar";

function TasksPage({
  wpTheme,
  setWpTheme,
  wp,
  setWP,
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
}) {
  const [highestDone, setHighestDone] = useState(0);
  const [secondDone, setSecondDone] = useState(0);
  const [thirdDone, setThirdDone] = useState(0);
  const [fourthDone, setFourthDone] = useState(0);
  return (
    <div className='max-w-8xl'>
      <NavBar wpTheme={wpTheme} setWpTheme={setWpTheme} wp={wp} setWP={setWP} />
      <br />
      <h1 className='mb-8 text-3xl font-bold bg-black text-white rounded-md'>
        "Discipline is choosing between what you want now, and what you want
        most."
      </h1>
      <h3 className='mb-5 text-2xl font-bold text-white '>-Abraham Lincoln</h3>

      <br />
      <SelectPriority
        count={count}
        setCount={setCount}
        highest={highest}
        setHighest={setHighest}
        second={second}
        setSecond={setSecond}
        third={third}
        setThird={setThird}
        fourth={fourth}
        setFourth={setFourth}
        text={text}
        setText={setText}
        highestDone={highestDone}
        setHighestDone={setHighestDone}
        secondDone={secondDone}
        setSecondDone={setSecondDone}
        thirdDone={thirdDone}
        setThirdDone={setThirdDone}
        fourthDone={fourthDone}
        setFourthDone={setFourthDone}
      />
      <br />
      <div class='flex justify-center w-full py-2 gap-8'>
        <a href='#item1' className='btn btn-s bg-red-700 text-white'>
          ! Highest Priority
        </a>
        <a href='#item2' className='btn btn-s bg-slate-800 text-white text-1xl'>
          Important, But Not Urgent
        </a>
        <a href='#item3' className='btn btn-s bg-slate-500 text-white'>
          Not Important, But Urgent
        </a>
        <a href='#item4' className='btn btn-s bg-slate-200 text-black'>
          Lowest Priority
        </a>
      </div>
      <br />
      <div class='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <HighPriority
            highest={highest}
            setHighest={setHighest}
            text={text}
            highestDone={highestDone}
            setHighestDone={setHighestDone}
          />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <ImptNotUrgent
            second={second}
            setSecond={setSecond}
            text={text}
            secondDone={secondDone}
            setSecondDone={setSecondDone}
          />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <NotImptButUrgt
            third={third}
            setThird={setThird}
            text={text}
            thirdDone={thirdDone}
            setThirdDone={setThirdDone}
          />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <LowPriority
            fourth={fourth}
            setFourth={setFourth}
            text={text}
            fourthDone={fourthDone}
            setFourthDone={setFourthDone}
          />
        </div>
      </div>
    </div>
  );
}

export default TasksPage;
