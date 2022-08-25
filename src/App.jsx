import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./Pages/IndexPage";
import HomePage from "./Pages/HomePage";
import { useState } from "react";
import LayoutPage from "./Pages/Layout";
import NavBar from "./Pages/NavBar";
import TasksPage from "./Pages/TasksPage";
import AboutPage from "./Pages/AboutPage";
import WeatherPage from "./Pages/WeatherPage";
import ConversionPage from "./Pages/ConversionPage";
import StocksPage from "./Pages/StocksPage";
import EntertainmentPage from "./Pages/EntertainmentPage";

const defaultWP =
  "https://images.unsplash.com/photo-1660992433932-048880a4790e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";

function App() {
  const [simp, setSimp] = useState("");
  const [name, setName] = useState(""); //might change to useContext to pass on both name and Wallpaper to other pages
  const [wpTheme, setWpTheme] = useState("");
  const [wp, setWP] = useState(defaultWP);

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
            <Route path='/home' element={<HomePage name={name} wp={wp} />} />
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/guide' element={<AboutPage />} />
            <Route path='/weather' element={<WeatherPage />} />
            <Route path='/currency' element={<ConversionPage />} />
            <Route path='/stocks' element={<StocksPage />} />
            <Route path='/entertainment' element={<EntertainmentPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
