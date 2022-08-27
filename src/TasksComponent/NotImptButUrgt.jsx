function NotImptButUrgt({ third, setThird }) {
  const handleRemove = (index) => () => {
    setThird((tasks) => tasks.filter((_, i) => i !== index));
  };

  const thirdPriorityList = third.map((item, index) => (
    <div class='card w-60 bg-primary text-primary-content'>
      <div class='card-body'>
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