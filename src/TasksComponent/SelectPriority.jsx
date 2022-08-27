import { useState } from "react";

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
}) {
  const [prodMsg, setProdMsg] = useState([]);
  const [on, setOn] = useState("on");

  const handleText = (e) => {
    setText(e.target.value);
  };
  console.log(typeof text);

  const handleHighest = () => {
    setHighest([...highest, text]);
    setCount(count + 1);
  };

  const handleSecond = () => {
    setSecond([...second, text]);
    setCount(count + 1);
  };

  const handleThird = () => {
    setThird([...third, text]);
    setCount(count + 1);
  };

  const handleFourth = () => {
    setFourth([...fourth, text]);
    setCount(count + 1);
  };
  const message = `You have a total of ${count} pending tasks. ${highest.length} of them are high priority.`;
  const handleMsg = () => {
    prodMsg.includes(message)
      ? setProdMsg(prodMsg.filter((msg) => msg !== message))
      : setProdMsg([...prodMsg, message]);
    if (on === "on") {
      setOn("off");
    } else {
      setOn("on");
    }
  };

  return (
    <div className='grid grid-cols-2 gap-4'>
      <textarea
        onChange={handleText}
        className='textarea textarea-info text-teal-700 text-2xl font-serif'
        placeholder='Describe what to do and when.'></textarea>

      <div className='dropdown dropdown-top '>
        <label
          tabindex='0'
          class='btn btn-active btn-primary m-3 float-center w-full'>
          Pick Priority
        </label>
        <ul
          tabindex='0'
          class='dropdown-content menu shadow p-2 bg-base-100 rounded-box w-80'>
          <li onClick={handleHighest} className='text-red-700 text-1xl '>
            <a>Important and Urgent. Don't procrastinate!</a>
          </li>
          <li onClick={handleSecond} className='text-teal-500 text-1xl'>
            <a>It's Important, Make Time For It Later.</a>
          </li>
          <li onClick={handleThird} className='text-teal-400 text-1xl'>
            <a>Urgent, But... Meh. Delegate/Reschedule?</a>
          </li>
          <li onClick={handleFourth} className='text-teal-300 text-1xl'>
            <a>Can Live Without. Cancel/Ignore?</a>
          </li>
        </ul>
      </div>
      <button onClick={handleMsg} class='btn btn-glass btn-block text-1xl'>
        Turn {on} Productivity Mode.
      </button>
      <p className='text-2xl'>{prodMsg}</p>
    </div>
  );
}

export default SelectPriority;
//
