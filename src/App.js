import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Add from './pages/Add'
import Learn from "./pages/Learn";
const App = () => {
    return(
    <>
    <Router>
      
      <Switch>
        <Route path="/MinorityProgrammers---DAOfind-Frontend-skill-test/" exact component={Home} />
        <Route path="/add"  component={Add} />
        <Route path="/Learn" component={Learn} />
      </Switch>
    </Router>
    </>
  );
};

export default App;

