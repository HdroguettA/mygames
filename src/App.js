import React from 'react';
import './App.css';
import { HashRouter, Switch, Route, withRouter  } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Asteroids from "./components/Games/Asteroids/Asteroid";
import history from "./history";

function App() {
  return (
    <div className="App">
      <HashRouter history={history}>
        <div className="webpage-content">
        <Switch>
          <Route exact path="/" component={withRouter(Home)}>
          </Route>
          <Route exact path="/Search" component={withRouter(Search)}>
          </Route>
          <Route exact path="/Asteroids" component={withRouter(Asteroids)}>
          </Route>
        </Switch>
        </div>
    </HashRouter>
    </div>
  );
}

export default App;