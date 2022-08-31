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
    <div className='card-body text-black bg-white max-w-72 rounded-md'>
      <h2 className='card-title justify-center'>
        What's your lucky number today?
      </h2>{" "}
      <p className='font-mono font-bold text-2xl justify-center'>{trivia}</p>
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
