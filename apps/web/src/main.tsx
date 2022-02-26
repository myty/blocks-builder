import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import App from "./App";

(function init() {
  miro.board.ui.on("icon:click", async () => {
    await miro.board.ui.openPanel({ url: "intro" });
  });
})();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
