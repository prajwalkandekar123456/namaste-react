import React from "react";
import ReactDOM from "react-dom/client";

// React element object
const heading = React.createElement(
  "h1",
  { id: "hello" },
  "Namaste React 🚀🚀"
);

// JSX
// This is not the pure JS
// Actually parcel is doing the job
//This JSX code traspiled before it reaches to the JS Engine
// Parcel package Babel🚀 is actually doing this job
// This is also the react element which is also the object
const jsxHeading = <h1 className="head">Hello this is jsx!!!🚀🚀🚀🚀🚀🚀</h1>;

// React root

// React Component 🚀🚀🚀
// 1) Functional Component
// It is the simple JS function which return the JSX code
// First letter should be capital

const FunctionalComponent = () => {
  return (
    <h1>
      This is second Functional Component and we want to call it inside another
      Functional Component
    </h1>
  );
};

// This is component composition
const number = 1000;
const HeadingComponent = () => {
  return (
    <div id="container">
      <h2>{number}</h2>
      <FunctionalComponent />
      <h1>This is the first Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

//This is how we render the functional component
root.render(<HeadingComponent />);
