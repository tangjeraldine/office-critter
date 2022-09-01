import { useState } from "react";
import { useEffect } from "react";
import CreditText from "../AboutComponent/Credits";
import AboutFooter from "../AboutComponent/Footer";
import GetInTouch from "../AboutComponent/GetInTouch";
import HowToText from "../AboutComponent/HowTo";
import AboutText from "../AboutComponent/Text";
import NavBar from "./NavBar";

function AboutPage({ wpTheme, setWpTheme, wp, setWP }) {
  const [aboutPic, setAboutPic] = useState(
    "https://images.unsplash.com/photo-1553564240-81ee7d218037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80"
  );

  useEffect(() => {
    const aboutPicURL =
      "https://api.unsplash.com/photos/random?client_id=GdUVswihOUZQbPBprLpHirAHvbdsxnrRq_98puNbwCs&orientation=landscape&query=street-photography";
    fetch(aboutPicURL)
      .then((response) => response.json())
      .then((data) => setAboutPic(data.urls.small));
  }, []);

  return (
    <div className='text-white'>
      <NavBar wpTheme={wpTheme} setWpTheme={setWpTheme} wp={wp} setWP={setWP} />
      <br />
      <div className='grid grid-cols-3 opacity-90'>
        <div></div>
        <img className='mask-parallelogram ' src={aboutPic} />
      </div>
      <br />
      <div class='carousel w-full'>
        <div id='slide1' class='carousel-item relative w-full '>
          <AboutText />
          <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' class='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' class='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' class='carousel-item relative w-full'>
          <HowToText />
          <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' class='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' class='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' class='carousel-item relative w-full'>
          <CreditText />
          <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' class='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' class='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' class='carousel-item relative w-full'>
          <GetInTouch />
          <div class='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' class='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' class='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>

      <AboutFooter />
    </div>
  );
}

export default AboutPage;
