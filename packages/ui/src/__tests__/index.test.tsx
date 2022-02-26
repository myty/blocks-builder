import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "../components/button/button";

describe("CounterButton", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
