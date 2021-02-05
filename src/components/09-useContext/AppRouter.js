import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,  
  } from "react-router-dom";
import AboutScreen from './AboutScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NavBar from './NavBar';

export default function AppRouter() {
    return (
        <Router>
        <div>
         
            <NavBar/>
        
          <Switch>
             <Route exact path="/" component={HomeScreen}/>
            <Route path="/about" component={AboutScreen}/>
            <Route path="/login" component={LoginScreen}/>
          <Redirect to='/'/>
          </Switch>
        </div>
      </Router>
        
    )
}
