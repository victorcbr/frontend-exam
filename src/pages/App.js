import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Login } from "pages";

import PrivateRoute from "config/PrivateRoute";

const App = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default App;
