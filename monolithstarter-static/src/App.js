import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HelloPage from "./pages/HelloPage";
import HomePage from "./pages/HomePage";
import Parser from "./pages/uploadFile";

class App extends Component {
  render() {
    return (
        <div className="Container">
        <h1>Csv Parser</h1>
          <Switch>
            <Route key="home" path="/" exact={true} component={HomePage} />
            <Route key="hello" path="/hello" exact={true} component={HelloPage} />
            <Route key="parser" path="/parser" exact={true} component={Parser} />
          </Switch>
        </div>
    );
  }
}

export default App;
