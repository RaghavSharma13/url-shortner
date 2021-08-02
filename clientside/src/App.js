import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signUp';
import History from './components/History';
import Login from './components/login';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [authenticated, setAuth] = useState(false)
  return (
    <Router>
      <Switch>
      <Route exact path="/users/signUp" render={(props)=><SignUp {...props} setAuth={setAuth}/>} />
      <Route exact path="/users/login" render={(props)=><Login {...props} setAuth={setAuth}/>}/>
      <Route exact path="/user/history" render={(props)=><History {...props} />}/>
      <Route path="/" render={(props)=><Home {...props} logged={authenticated} setLogged={setAuth}/>} />
      </Switch>
    </Router>
  )
}

export default App

