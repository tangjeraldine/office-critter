function NotImptButUrgt({ third, setThird, thirdDone, setThirdDone }) {
  const handleRemove = (index) => () => {
    setThird((tasks) => tasks.filter((_, i) => i !== index));
    setThirdDone(thirdDone + 1);
  };

  const thirdPriorityList = third.map((item, index) => (
    <div class='card w-60 bg-slate-400 text-primary-content'>
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
  return <div class='grid grid-cols-5 gap-2'>{thirdPriorityList}</div>;
}

export default NotImptButUrgt;
