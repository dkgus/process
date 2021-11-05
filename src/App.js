import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import RegisterPage from "./components/views/registerPage/RegisterPage";

function App() {
  return (
    <div>
      <Switch>
          {/* <Route exact path="/register" component={RegisterPage} /> */}
          <RegisterPage />
      </Switch>
    </div>
  );
}

export default App;
