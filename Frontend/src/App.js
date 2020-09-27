import React from "react";
import "./App.css";
import Item from "./components/item";
import "./style/style.css";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  loginState = () => {
    this.setState({
      loggedIn: true,
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {/* {!this.state.loggedIn ? (
              <Login loginState={this.loginState} className="login-page" />
            ) : (
              <div>welcome to the app</div>
            )} */}
          </header>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Register} />
            <Route path="/" exact component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
