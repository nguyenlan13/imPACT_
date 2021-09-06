// import React from 'react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import { getUser } from './actions/user';
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

import "antd/dist/antd.css";
import { Layout } from "antd"
import { Content } from "antd/lib/layout/layout";
import Sidebar from './components/sidebar/sidebar';
import MyHabits from './containers/SidebarPages/myHabits'
import MyIdentities from './containers/SidebarPages/myIdentities'
import MyActionSteps from './containers/SidebarPages/myActionSteps'
import MyProgress from './containers/SidebarPages/myProgress'

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch()
  // const [userInfo, setUserInfo] = useState(undefined)
  // const token = useSelector((state) => state.token)

  const handleToggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    dispatch(getUser())

  }, [dispatch]) 

  const user = useSelector((state) => state.user)
 console.log(user)


  return (
    
    <Layout style={{ minHeight: "100vh" }}>
    <Router>
      {user && user.isAuthenticated && (<Sidebar {...{ collapsed }} />)}
      {/* <Layout> */}
        {/* <Header {...{ collapsed, setCollapsed: handleToggleCollapsed }} /> */}
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Navbar/>
          <Content
            style={{
              backgroundColor: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
              height: "100%",
            }}
          >
        {/* <div className="App"> */}
            {/* <Navbar/> */}
            <Switch>
                <Route path="/identities/:identityId"  render={({match}) => (<IdentityItem match={match} />)} />
                <Route path="/habits/:habitId"  render={({match}) => (<HabitItem match={match} />)} />
                {/* <Route path="/profile/:userId"  render={({match}) => (<HabitItem match={match} />)} /> */}
                <Route exact path="/my_habits" component={MyHabits}/>
                <Route exact path="/my_identities" component={MyIdentities}/>
                <Route exact path="/my_action_steps" component={MyActionSteps}/>
                <Route exact path="/my_progress" component={MyProgress}/>
                <Route exact path="/identities" component={Identity}/>
                <Route exact path="/habits" component={Habit}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/" component={Welcome}/>
            </Switch>
        {/* </div> */}
            </Content>
          </Layout>
        {/* </Layout> */}
      </Router>
    </Layout>
  );
}

export default App;
