import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Intro from "./pages/intro";
import { MediatorProvider } from "./providers/mediator-provider";

function App() {
  return (
    <MediatorProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="intro" element={<Intro />} />
      </Routes>
    </MediatorProvider>
  );
}

export default App;
