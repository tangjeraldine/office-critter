import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./Pages/IndexPage";
import HomePage from "./Pages/HomePage";
import { useState } from "react";
import LayoutPage from "./Pages/Layout";

import TasksPage from "./Pages/TasksPage";
import AboutPage from "./Pages/AboutPage";
import WeatherPage from "./Pages/WeatherPage";

import EntertainmentPage from "./Pages/EntertainmentPage";

const defaultWP =
  "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

function App() {
  const [simp, setSimp] = useState("");
  const [name, setName] = useState("O' Mysterious One"); //might change to useContext to pass on both name and Wallpaper to other pages
  const [wpTheme, setWpTheme] = useState("");
  const [wp, setWP] = useState(defaultWP);
  const [highest, setHighest] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {" "}
          <Route
            path='/'
            element={
              <LayoutPage
                wpTheme={wpTheme}
                setWpTheme={setWpTheme}
                wp={wp}
                setWP={setWP}
              />
            }>
            <Route
              index
              element={
                <RootPage
                  simp={simp}
                  setSimp={setSimp}
                  name={name}
                  setName={setName}
                />
              }
            />
            <Route
              path='/home'
              element={
                <HomePage
                  name={name}
                  wpTheme={wpTheme}
                  setWpTheme={setWpTheme}
                  wp={wp}
                  setWP={setWP}
                />
              }
            />
            <Route
              path='/tasks'
              element={
                <TasksPage
                  wpTheme={wpTheme}
                  setWpTheme={setWpTheme}
                  wp={wp}
                  setWP={setWP}
                  count={count}
                  setCount={setCount}
                  highest={highest}
                  setHighest={setHighest}
                  second={second}
                  setSecond={setSecond}
                  third={third}
                  setThird={setThird}
                  fourth={fourth}
                  setFourth={setFourth}
                  text={text}
                  setText={setText}
                />
              }
            />
            <Route
              path='/guide'
              element={
                <AboutPage
                  wpTheme={wpTheme}
                  setWpTheme={setWpTheme}
                  wp={wp}
                  setWP={setWP}
                />
              }
            />
            <Route
              path='/weather'
              element={
                <WeatherPage
                  wpTheme={wpTheme}
                  setWpTheme={setWpTheme}
                  wp={wp}
                  setWP={setWP}
                />
              }
            />
            <Route
              path='/entertainment'
              element={
                <EntertainmentPage
                  wpTheme={wpTheme}
                  setWpTheme={setWpTheme}
                  wp={wp}
                  setWP={setWP}
                  count={count}
                  setCount={setCount}
                  highest={highest}
                  setHighest={setHighest}
                  second={second}
                  setSecond={setSecond}
                  third={third}
                  setThird={setThird}
                  fourth={fourth}
                  setFourth={setFourth}
                  text={text}
                  setText={setText}
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
