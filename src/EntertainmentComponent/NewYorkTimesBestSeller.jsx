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
    <div className='grid grid-cols-3 flex gap-5 '>
      <div className='max-w-56 max-h-80 text-black bg-base-300 hover:bg-base-100 rounded-md'>
        <div className='grid grid-cols-2'>
          <img
            className='max-h-52 rounded-md'
            src={NYbooks?.[0]?.book_image}
            alt='Rank1'
          />
          <div className='margin-auto'>
            <h2 class='font-bold text-2xl'>
              <div class='badge badge-secondary'>1st!</div>
              <a href={NYbooks?.[0]?.buy_links?.[0]?.url} target='_blank'>
                {NYbooks?.[0]?.title}
              </a>
            </h2>
            <p>{NYbooks?.[0]?.description}</p>
          </div>
        </div>
        <div class='badge badge-outline'>Author(s): {NYbooks?.[0]?.author}</div>
        <div class='badge badge-outline'>
          Publisher: {NYbooks?.[0]?.publisher}
        </div>
      </div>
      <div className='max-w-56 max-h-80 text-black bg-base-300 hover:bg-base-100 rounded-md'>
        <div className='grid grid-cols-2'>
          <img
            className='max-h-52 rounded-md'
            src={NYbooks?.[1]?.book_image}
            alt='Rank1'
          />
          <div className='margin-auto'>
            <h2 class='font-bold text-2xl'>
              <div class='badge badge-secondary'>2nd</div>
              <a href={NYbooks?.[1]?.buy_links?.[1]?.url} target='_blank'>
                {NYbooks?.[1]?.title}
              </a>
            </h2>
            <p>{NYbooks?.[1]?.description}</p>
          </div>
        </div>
        <div class='badge badge-outline'>Author(s): {NYbooks?.[1]?.author}</div>
        <div class='badge badge-outline'>
          Publisher: {NYbooks?.[1]?.publisher}
        </div>
      </div>
      <div className='max-w-56 max-h-80 text-black bg-base-300 hover:bg-base-100 rounded-md'>
        <div className='grid grid-cols-2'>
          <img
            className='max-h-52 rounded-md'
            src={NYbooks?.[2]?.book_image}
            alt='Rank1'
          />
          <div className='margin-auto'>
            <h2 class='font-bold text-2xl'>
              <div class='badge badge-secondary'>3rd</div>
              <a href={NYbooks?.[2]?.buy_links?.[2]?.url} target='_blank'>
                {NYbooks?.[2]?.title}
              </a>
            </h2>
            <p>{NYbooks?.[2]?.description}</p>
          </div>
        </div>
        <div class='badge badge-outline'>Author(s): {NYbooks?.[2]?.author}</div>
        <div class='badge badge-outline'>
          Publisher: {NYbooks?.[2]?.publisher}
        </div>
      </div>
    </div>
  );
}

export default NewYorkTimes;
