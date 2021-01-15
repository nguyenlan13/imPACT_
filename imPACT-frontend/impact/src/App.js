// import React from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Welcome from './containers/welcome'
import About from './components/about'
import Dashboard from './containers/Dashboard'
import Profile from './containers/profilePage'
import Identity from './containers/identityPage'
import Habit from './containers/habitPage'
import Login from './containers/loginPage'
import Signup from './containers/signupPage'
import IdentityItem from './components/identities/identityItem'
import HabitItem from './components/habits/habitItem'

function App() {
  return (
      <Router>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path="/identities/:identityId"  render={({match}) => (<IdentityItem match={match} />)} />
                <Route path="/habits/:habitId"  render={({match}) => (<HabitItem match={match} />)} />
                {/* <Route path="/profile/:userId"  render={({match}) => (<HabitItem match={match} />)} /> */}
                <Route exact path="/identities" component={Identity}/>
                <Route exact path="/habits" component={Habit}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/" component={Welcome}/>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
