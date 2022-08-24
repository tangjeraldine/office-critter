import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from "./SubPages/RootPage";
import HomePage from "./SubPages/HomePage";
import { useState } from "react";

const defaultWP =
  "https://images.unsplash.com/photo-1660840389576-f49c99366fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";

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
              <RootPage
                simp={simp}
                setSimp={setSimp}
                name={name}
                setName={setName}
                wpTheme={wpTheme}
                setWpTheme={setWpTheme}
                wp={wp}
                setWP={setWP}
              />
            }
          />
          <Route path='/home' element={<HomePage name={name} wp={wp} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
