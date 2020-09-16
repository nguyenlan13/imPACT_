import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './containers/dashboard'
import Profile from './containers/profilePage'
import Login from './containers/loginPage'
import Signup from './containers/signupPage'

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
            <Switch>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
    
            </Switch>
        </div>
      </Router>
  );
}

export default App;
