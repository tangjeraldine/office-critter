function HighPriority({ highest, setHighest, highestDone, setHighestDone }) {
  const handleRemove = (index) => () => {
    setHighest((tasks) => tasks.filter((_, i) => i !== index));
    setHighestDone(highestDone + 1);
  };

  const highPriorityList = highest.map((item, index) => (
    <div className='card w-60 bg-primary text-primary-content'>
      <div className='card-body'>
        <p>{item}</p>
        <div className='card-actions justify-end'>
          <button onClick={handleRemove(index)} className='btn'>
            Done!
          </button>
        </div>
      </div>
    </div>
  ));
  return <div className='grid grid-cols-5 gap-2'>{highPriorityList}</div>;
}

export default HighPriority;

{
  /* <div class='card w-60 bg-primary text-primary-content'>
  <div class='card-body'>
    <h4 class='card-title'>Meet So and So for lunch at 12pm at Golden Restaurant.</h4>
    <div class='card-actions justify-end'>
      <button class='btn'>Done!</button>
    </div>
  </div>
</div>; */
}
