import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter  } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="webpage-content">
        <Switch>
          <Route exact path="/Home" component={withRouter(Home)}>
          </Route>
          <Route exact path="/Search" component={withRouter(Search)}>
          </Route>
        </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;