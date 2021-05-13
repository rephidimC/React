import React from "react";
import ReactDOM from "react-dom";
// import add from "./calculator";
import * as All from "./calculator";
// import { add, subtract, multiply, divide } from "./calculator";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{All.add(1, 2)}</li>
    <li>{All.multiply(2, 3)}</li>
    <li>{All.subtract(7, 2)}</li>
    <li>{All.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
