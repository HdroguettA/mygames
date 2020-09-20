import React from 'react';
import './App.css';
import { HashRouter, Switch, Route, withRouter  } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div className="webpage-content">
        <Switch>
          <Route exact path="/" component={withRouter(Home)}>
          </Route>
          <Route exact path="/Search" component={withRouter(Search)}>
          </Route>
        </Switch>
        </div>
    </HashRouter>
    </div>
  );
}

export default App;