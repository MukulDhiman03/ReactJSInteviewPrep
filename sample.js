import React from "react";
import ReactDOM from "react-dom/client";
/***
        using simple javascript 

        const heading = document.createElement("h1");
        heading.innerHTML = "Hello world from javascrip";

        const root = document.getElementById("root");
        root.appendChild(heading)

        ***/

// using react js

// const parent = React.createElement("div", { id: 123 }, [
//   React.createElement("h1", { key: "h1" }, "I am a heading 1"),
//   React.createElement("h2", { key: "h2" }, "I am a heading 2"),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// react element
const Title = () => <h1 className="head">Hello i am a title</h1>;

// react functional component
const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h1>Hello i am a HeadingComponent</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(HeadingComponent());
root.render(<HeadingComponent />);
