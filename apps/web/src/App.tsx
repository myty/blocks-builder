import * as React from "react";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Intro from "./intro";

async function init() {
  miro.board.ui.on("icon:click", async () => {
    await miro.board.ui.openPanel({ url: "intro" });
  });
}

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="intro" element={<Intro />} />
    </Routes>
  );
}

export default App;
