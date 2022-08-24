import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootPage from './SubPages/RootPage';
import HomePage from './SubPages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {" "}
          <Route path="/" element={<RootPage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
