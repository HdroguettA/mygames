import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter  } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="webpage-content">
        <Switch>
          <Route exact path="/" component={withRouter(Search)}>
          </Route>
        </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;