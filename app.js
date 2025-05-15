/***
        using simple javascript

        const heading = document.createElement("h1");
        heading.innerHTML = "Hello world from javascrip";

        const root = document.getElementById("root");
        root.appendChild(heading)

        ***/

// using react js

const parent = React.createElement("div", {}, [
  React.createElement("h1", {}, "I am a heading 1"),
  React.createElement("h1", {}, "I am a heading 2"),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
