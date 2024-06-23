import React from "react";
import ReactDOM from "react-dom/client";
// Creating a HTML element inside React
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React !!!"
);

// Printing the React object
console.log(heading);

// Creating root in React where the whole React code will render
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the HTML element
// Creating that HTML tag and putting it on the DOM
root.render(heading);

// Creating nested elements in React
// To add siblings we can use the array

/**
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am the first h1 tag</h1>
 *          <h1>I am the second h1 tag</h1>
 *      </div>
 * </div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I am a H1 tag"),
    React.createElement("h1", { id: "h2" }, "I am a second h1 tag"),
  ])
);

// Printing the React object
console.log(parent);

// Actually creating the tags and rendering on the DOM
root.render(parent);
