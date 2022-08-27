import { useState } from "react";
import HighPriority from "../TasksComponent/HighPriority";
import ImptNotUrgent from "../TasksComponent/ImptNotUrgt";
import LowPriority from "../TasksComponent/LowPriority";
import NotImptButUrgt from "../TasksComponent/NotImptButUrgt";
import SelectPriority from "../TasksComponent/SelectPriority";
import NavBar from "./NavBar";

function TasksPage() {
  const [highest, setHighest] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className='max-w-7xl'>
      <NavBar />
      <br />
      <h1 className='mb-5 text-4xl font-bold bg-blue-100 text-black'>
        "Discipline is choosing between what you want now, and what you want
        most."
      </h1>
      <h3 className='mb-5 text-2xl font-mono font-bold '>-Abraham Lincoln</h3>
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
      />
      <br />
      <div class='flex justify-center font-serif w-full py-2 gap-8'>
        <a href='#item1' className='btn btn-s bg-red-700 text-white'>
          ! Highest Priority
        </a>
        <a href='#item2' className='btn btn-s bg-teal-600 text-white'>
          Important, But Not Urgent
        </a>
        <a href='#item3' className='btn btn-s bg-teal-400 text-black'>
          Not Important, But Urgent
        </a>
        <a href='#item4' className='btn btn-s bg-teal-300 text-grey'>
          Lowest Priority
        </a>
      </div>
      <br />
      <div class='carousel w-full'>
        <div id='item1' className='carousel-item w-full'>
          <HighPriority highest={highest} setHighest={setHighest} text={text} />
        </div>
        <div id='item2' className='carousel-item w-full'>
          <ImptNotUrgent second={second} setSecond={setSecond} text={text} />
        </div>
        <div id='item3' className='carousel-item w-full'>
          <NotImptButUrgt third={third} setThird={setThird} text={text} />
        </div>
        <div id='item4' className='carousel-item w-full'>
          <LowPriority fourth={fourth} setFourth={setFourth} text={text} />
        </div>
      </div>
    </div>
  );
}

export default TasksPage;
