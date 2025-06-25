// its a normal javascript class.
//  it has a render function which returns a JSX.
//  whenever we call the fucntional component first of all constructor is called.
// this.setState() to update the state
// first constructor is called then render

import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.name);
    console.log("Child Constructor");

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  componentDidMount() {
    console.log("Child Component Did Mout");
  }

  render() {
    const { name, location, avatar_url } = this.props;
    const { count, count2 } = this.state;
    console.log("Child Render");

    return (
      <div className="user-card">
        <h1>count:{count}</h1>
        <div>
          LoggedIn User-
          <span className="px-4 bg-black rounded text-white p-2">
            <UserContext.Consumer>
              {(data) => data.loggedInUser}
            </UserContext.Consumer>
          </span>
        </div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        {/* <h1>count2:{count2}</h1> */}
        <h2>Name:{name}</h2>
        <h3>{location}</h3>
        <h4>Contact: @mukuldhiman7</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
