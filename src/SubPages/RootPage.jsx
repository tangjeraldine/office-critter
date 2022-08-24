/* eslint-disable */

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RootPage() {
  const [simp, setSimp] = useState("");

  useEffect(() => {
    const simpsonsURL = "https://thesimpsonsquoteapi.glitch.me/quotes";

    fetch(simpsonsURL)
      .then((response) => response.json())
      .then((data) => setSimp(data[0]));
  }, []);

  return (
    <div className='flex m-auto flex-col justify-center items-center'>
      <h2>This is the root page</h2>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='flex flex-col justify-center items-center'>
          {simp.quote}
        </h2>
        <h4>{simp.character}</h4>
        <img
          className='flex flex-col justify-center items-center'
          src={simp.image}
          style={{ height: "200px" }}
        />
      </div>
      <br />
      <h1 className='text-3xl font-bold'>Hello,</h1>
      <input
        type='text'
        placeholder='Enter your name here'
        class='input input-bordered input-secondary w-full max-w-xs'
      />
      <h2>
        <button class='btn btn-warning'>
          {" "}
          <Link to='/home'>Let's Get Started</Link>
        </button>
      </h2>
    </div>
  );
}

export default RootPage;
