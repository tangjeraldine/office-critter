import ProductivityStats from "./ProductivityStats";

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
  highestDone,
  secondDone,
  thirdDone,
  fourthDone,
}) {
  const handleText = (e) => {
    setText(e.target.value);
  };
  // console.log(typeof text);

  const handleHighest = () => {
    setHighest([...highest, text]);
    setCount(count + 1);
    // console.log(highest);
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

  return (
    <div>
      <div className='grid grid-cols-2 gap-4'>
        <textarea
          onChange={handleText}
          className='textarea textarea-info text-teal-700 text-2xl font-serif'
          placeholder='Add task to begin.'></textarea>

        <div className='dropdown dropdown-bottom '>
          <label tabindex='0' class='btn  btn-black m-3 float-center w-full'>
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
      <br />
      <ProductivityStats
        highest={highest}
        second={second}
        third={third}
        fourth={fourth}
        count={count}
        highestDone={highestDone}
        secondDone={secondDone}
        thirdDone={thirdDone}
        fourthDone={fourthDone}
      />
    </div>
  );
}

export default SelectPriority;
//
