/***

        using simple javascript

        const heading = document.createElement("h1");
        heading.innerHTML = "Hello world from javascrip";

        const root = document.getElementById("root");
        root.appendChild(heading)

        ***/

// using react js

const heading = React.createElement(
  "h1",
  { id: "Heading" },
  "This is a heading"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(heading);
console.log(root);
