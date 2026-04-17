import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import HowToPlay from "./pages/HowToPlay/HowToPlay.jsx";

function App() {
  return (
    <main className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
