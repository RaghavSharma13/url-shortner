import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/home';
import SignUp from './components/signUp';
import History from './components/History';
import Login from './components/login';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
      <Route exact path="/users/signUp" render={(props)=><SignUp {...props}/>} />
      <Route exact path="/users/login" render={(props)=><Login {...props}/>}/>
      <Route exact path="/user/history" render={(props)=><History {...props} />}/>
      <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default App

