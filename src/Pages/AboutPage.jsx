import { useState } from "react";
import { useEffect } from "react";
import AboutFooter from "../AboutComponent/Footer";
import GetInTouch from "../AboutComponent/GetInTouch";
import AboutText from "../AboutComponent/Text";
import NavBar from "./NavBar";

function AboutPage() {
  const [aboutPic, setAboutPic] = useState("");

  useEffect(() => {
    const aboutPicURL =
      "https://api.unsplash.com/photos/random?client_id=GdUVswihOUZQbPBprLpHirAHvbdsxnrRq_98puNbwCs&orientation=landscape&query=street-photography";
    fetch(aboutPicURL)
      .then((response) => response.json())
      .then((data) => setAboutPic(data));
  }, []);

  return (
    <div>
      <NavBar />
      <br />
      <div>
        <img
          className='mask mask-parallelogram-3 float-left'
          src={aboutPic?.urls?.small}
        />
      </div>
      <AboutText />
      <GetInTouch />
      <AboutFooter />
    </div>
  );
}

export default AboutPage;
