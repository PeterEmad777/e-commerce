import React from "react";
import API from "../axios";
//import axios from "axios";
import cors from "cors";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
      token: "",
      loggedIn: false,
    };
  }
  loginState = () => {
    this.setState({
      loggedIn: true,
    });
  };
  loginHandler = () => {
    let eMail = this.state.user.email;
    let passWord = this.state.user.password;
    console.log(eMail + passWord);
    API.post("/signin/", {
      email: eMail,
      password: passWord,
    })
      .then((res) => {
        console.log(res.data);
        this.setState({
          token: res.data.token,
        });
        // console.log(this.props.history);
        this.props.history.replace("/dashboard");
      })
      .catch((e) => {
        console.log(e);
        alert("problem logging you in");
      });
  };

  render() {
    return (
      <div className="user-component">
        <div className="email-div">
          <label>Email: </label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(event) => {
              this.setState({
                user: {
                  email: event.target.value,
                  password: this.state.user.password,
                },
              });
            }}
          ></input>
        </div>
        <div className="password-div">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(event) => {
              this.setState({
                user: {
                  password: event.target.value,
                  email: this.state.user.email,
                },
              });
            }}
          ></input>
        </div>
        <button onClick={this.loginHandler}>login</button>
        <button
          onClick={() => {
            this.props.history.push("/signup");
          }}
        >
          Register
        </button>
      </div>
    );
  }
}
