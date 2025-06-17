import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mout");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <p>This is namaste food live about page.</p>
        {/* <User name={"Mukul Dhiman"} /> */}
        <UserClass name={"Mukul Dhiman "} location={"Dehradun"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <p>This is namaste food live about page.</p>
//       {/* <User name={"Mukul Dhiman"} /> */}
//       <UserClass name={"Mukul Dhiman "} location={"Dehradun"} />
//     </div>
//   );
// };

export default About;
