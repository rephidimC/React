import React from "react";
import ReactDOM from "react-dom";
// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black"
// };
// customStyle.color = "gold";
// the above has been done to make it easy for us to change codebase on the go/fly, as in creation of var where edits are possible.

let greeting = "";
const date = new Date();
// const date = new Date("2021-05-12T19:26:08.339Z");
const hour = date.getHours();
const customStyle = {
  color: ""
};

// new Date().toTimeString().split(" ")[0];
if (hour > 0 && hour < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (hour > 12 && hour < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good night";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 style={customStyle}>{greeting}</h1>,
  document.getElementById("root")
);
