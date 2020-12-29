// import React from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './containers/home'
import Profile from './containers/profilePage'
import Identity from './containers/identityPage'
import Habit from './containers/habitPage'
import Login from './containers/loginPage'
import Signup from './containers/signupPage'


function App() {
  return (
      <Router>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path="/identities" component={Identity}/>
                <Route exact path="/habits" component={Habit}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
