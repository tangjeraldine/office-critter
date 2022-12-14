function ImptNotUrgent({ second, setSecond, secondDone, setSecondDone }) {
  const handleRemove = (index) => () => {
    setSecond((tasks) => tasks.filter((_, i) => i !== index));
    setSecondDone(secondDone + 1);
  };
  const secondPriorityList = second.map((item, index) => (
    <div class='card w-60 bg-slate-700 text-primary-content'>
      <div class='card-body text-white'>
        <p>{item}</p>
        <div class='card-actions justify-end'>
          <button onClick={handleRemove(index)} class='btn'>
            Done!
          </button>
        </div>
      </div>
    </div>
  ));
  return <div class='grid grid-cols-5 gap-2'>{secondPriorityList}</div>;
}

export default ImptNotUrgent;
