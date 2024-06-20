// creating a html element inside the react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react !!!"
);

// Printing the react object
console.log(heading);

// creating root in react where whole react code will render
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the html element
// creating that html tag and putting on the DOM
root.render(heading);

// Creating nested elements in the react
// To add siblings we can use the array

/**
 * <div id="parent">
 *      <divid="child">
 *          <h1>I am first h1 tag</h1>
 *          <h1>I am second h1 tag</h1>
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

// Printing the react object
console.log(parent);

// Actually creating the tags and rendering on DOM
root.render(parent);
