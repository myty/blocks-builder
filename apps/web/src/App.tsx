import * as React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Intro from "./pages/intro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="intro" element={<Intro />} />
    </Routes>
  );
}

export default App;
