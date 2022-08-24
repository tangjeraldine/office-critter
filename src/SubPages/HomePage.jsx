import { Link } from "react-router-dom";

function HomePage({ name, wp }) {
  return (
    <div
      style={{
        backgroundImage: `url(${wp})`,
        backgroundSize: "cover",
        width: "1200px",
        height: "1000px",
        opacity: "0.7",
      }}>
      <h2 className='text-center' style={{ backgroundColor: "white" }}>
        This is the HomePage
      </h2>
      <h1 style={{ backgroundColor: "white" }}>Good morning, {name}!</h1>
    </div>
  );
}

export default HomePage;
