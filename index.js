import React from "react";
import ReactDOM from "react-dom/client";


var hOne = React.createElement("h1", {}, "Hello World!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

var Hone = function () {
    return <>
      <h1>H1 Element</h1>
      <h2>H2 Element</h2>
      </>
  }

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(<Hone></Hone>);