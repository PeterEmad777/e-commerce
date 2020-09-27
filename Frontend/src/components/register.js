import React from "react";
import API from "../axios";
//import axios from "axios";
import cors from "cors";

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
      },
      token: "",
    };
  }
  loginHandler = () => {
    let eMail = this.state.user.email;
    let passWord = this.state.user.password;
    console.log(eMail + passWord);
    API.post("/signup/", {
      email: eMail,
      password: passWord,
    })
      .then((res) => {
        console.log(res.data);
        this.setState({
          token: res.data.token,
        });
        this.props.history.replace("/dashboard");
      })
      .catch((e) => {
        console.log(e);
        alert("problem Signing you up");
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
        <button onClick={this.loginHandler}>Register</button>
      </div>
    );
  }
}
