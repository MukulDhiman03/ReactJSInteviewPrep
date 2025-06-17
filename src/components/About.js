import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
    this.state = {
      userInfo: {
        login: "Dummy",
        avatar_url: "https://dummy",
      },
    };
  }

  async componentDidMount() {
    // api call, it will re render the component
    console.log("Parent Component Did Mout");
    // Api call
    const data = await fetch("https://api.github.com/users/mukuldhiman03");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log("Json", json);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }



  render() {
    const { login, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>About</h1>
        <p>This is namaste food live about page.</p>
        {/* <User name={"Mukul Dhiman"} /> */}
        <UserClass name={login} avatar_url={avatar_url} location={"Dehradun"} />
        {/* <UserClass name={"Mukul Dhiman "} location={"Dehradun"} /> */}
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
