// var React = require("react");
// // var ReactDOM = require("react-dom");
// In react, there's a new way of doing this.
import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(what to show, where to show);
//ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));
//the above is if we needed to render just one element.
const name = "Victor";
const language = "javaScript";
const luckyNumber = Math.floor(Math.random() * 10);

//What JSX offers is for me to be able to write javascrip inside HTML that is inside a javaScript already.
//But N.B: I can't write a statement. e.g if-else
ReactDOM.render(
  <div>
    <h1>
      Hello {name + " " + language}! and my language is {language}
    </h1>
    {/* below is a method of writing in es6. */}
    <h1>Hello {`${name} ${language}`}</h1>
    <p>I am Victor and my lucky number is {luckyNumber}.</p>
  </div>,
  document.getElementById("root")
);


const myName = "Angela";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);





// ReactDOM.render(what to show, where to show);
