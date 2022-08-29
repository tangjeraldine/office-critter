import { useState, useEffect } from "react";

function GiveNumberTrivia() {
  const [trivia, setTrivia] = useState("");
  const [input, setInput] = useState(29);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const fetchTrivia = () => {
    const triviaURL = `http://numbersapi.com/${input}/trivia?fragment`;
    fetch(triviaURL)
      .then((response) => response.text())
      .then((text) => setTrivia(text));
    // console.log(trivia);
  };

  return (
    <div className='card-body text-black bg-base-300 rounded-box max-w-72'>
      <h2 className='card-title justify-center'>Feed Me A Number</h2>{" "}
      <p className='font-mono font-bold justify-center'>{trivia}</p>
      <input
        type='number'
        placeholder='Enter any number'
        onChange={handleChange}
        className='max-w-1xl justify-center'
      />
      <div className='card-actions justify-center'>
        <button className='btn btn-primary' onClick={fetchTrivia}>
          Surprise me!
        </button>
      </div>
    </div>
  );
}

export default GiveNumberTrivia;
