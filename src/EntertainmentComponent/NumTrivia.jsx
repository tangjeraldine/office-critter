import { useState, useEffect } from "react";

function NumTrivia() {
  const [trivia, setTrivia] = useState("");
  const fetchTrivia = () => {
    const triviaURL = "http://numbersapi.com/random/trivia";
    fetch(triviaURL, { mode: "cors" })
      .then((response) => response.text())
      .then((text) => setTrivia(text));
    console.log(trivia);
  };

  return (
    <div className='card-body text-black bg-white max-w-72'>
      <h2 className='card-title justify-center'>Random Number Trivia</h2>
      <p className='font-mono font-bold justify-center'>{trivia}</p>
      <div className='card-actions justify-center'>
        <button className='btn btn-primary' onClick={fetchTrivia}>
          Show me a new one!
        </button>
      </div>
    </div>
  );
}

export default NumTrivia;
