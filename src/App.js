import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Navigation from "./components/navigation";

import Home from "./components/home";
import Search from "./components/search";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
