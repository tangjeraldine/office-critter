import { useState, useEffect } from "react";

function NewYorkTimes() {
  const [NYbooks, setNYBooks] = useState({});
  const bestSellerURL =
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=wQwUAQSOpGnnirdgJtwuaDRGxshyGSe1";
  useEffect(() => {
    fetch(bestSellerURL)
      .then((response) => response.json())
      .then((data) => setNYBooks(data.results?.books));
  }, []);
  // console.log(NYbooks[0].book_image);
  return (
    <div className='grid grid-cols-3 flex gap-8 '>
      <div className='w-70 text-black bg-base-300 hover:bg-base-100 rounded-md'>
        <img
          className='h-48 hover:h-2/5 rounded-md'
          src={NYbooks?.[0]?.book_image}
          alt='Rank1'
        />
        <div class='card-body'>
          <h2 class='card-title'>
            {NYbooks?.[0]?.title}
            <div class='badge badge-secondary'>1st!</div>
          </h2>
          <p>{NYbooks?.[0]?.description}</p>

          <div class='card-actions justify-end'>
            <div class='badge badge-outline'>
              Author(s): {NYbooks?.[0]?.author}
            </div>
            <div class='badge badge-outline'>
              Publisher: {NYbooks?.[0]?.publisher}
            </div>
          </div>
        </div>
      </div>
      <div className='w-70 text-black bg-base-300 hover:bg-base-100 rounded-md'>
        <img
          className='h-48 hover:h-2/5 rounded-md'
          src={NYbooks?.[1]?.book_image}
          alt='Rank2'
        />
        <div class='card-body'>
          <h2 class='card-title'>
            {NYbooks?.[1]?.title}
            <div class='badge badge-secondary'>2nd</div>
          </h2>
          <p>{NYbooks?.[1]?.description}</p>

          <div class='card-actions justify-end'>
            <div class='badge badge-outline'>
              Author(s): {NYbooks?.[1]?.author}
            </div>
            <div class='badge badge-outline'>
              Publisher: {NYbooks?.[1]?.publisher}
            </div>
          </div>
        </div>
      </div>
      <div className='w-70 text-black bg-base-300 hover:bg-base-100 rounded-md'>
        <figure>
          <img
            className='h-48 hover:h-2/5 rounded-md'
            src={NYbooks?.[2]?.book_image}
            alt='Rank3'
          />
        </figure>
        <div class='card-body'>
          <h2 class='card-title'>
            {NYbooks?.[2]?.title}
            <div class='badge badge-secondary'>3rd</div>
          </h2>
          <p>{NYbooks?.[2]?.description}</p>

          <div class='card-actions justify-end'>
            <div class='badge badge-outline'>
              Author(s): {NYbooks?.[2]?.author}
            </div>
            <div class='badge badge-outline'>
              Publisher: {NYbooks?.[2]?.publisher}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewYorkTimes;
