import { useState, useEffect } from "react";

function BDTrivia() {
  const [trivia, setTrivia] = useState("");
  const [inputDate, setInputDate] = useState(0);
  const [inputMonth, setInputMonth] = useState(0);

  const handleDate = (e) => {
    setInputDate(e.target.value);
  };

  const handleMonth = (e) => {
    setInputMonth(e.target.value);
  };

  const fetchTrivia = () => {
    const triviaURL = `http://numbersapi.com/${inputMonth}/${inputDate}/date`;
    fetch(triviaURL)
      .then((response) => response.text())
      .then((text) => setTrivia(text));
    console.log(trivia);
  };

  return (
    <div className='card-body text-black bg-base-300 rounded-box max-w-72'>
      <h2 class='card-title justify-center'>Birth Date Trivia</h2>
      <p className='font-mono font-bold justify-center'>{trivia}</p>
      <input
        type='number'
        placeholder='Enter date (e.g. 3, 27)'
        onChange={handleDate}
        className='max-w-1xl justify-center'
      />
      <input
        type='number'
        placeholder='Enter month (e.g. 9, 12 )'
        onChange={handleMonth}
        className='max-w-1xl justify-center'
      />
      <div class='card-actions justify-center'>
        <button class='btn btn-primary' onClick={fetchTrivia}>
          Can't wait to tell my colleagues!
        </button>
      </div>
    </div>
  );
}

export default BDTrivia;
