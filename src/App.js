import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Feed from './components/Feed';
import Logout from './components/Logout';
import Signup from './components/Signup';
import Authenticate from './components/Authenticate';

//Switch gir exclusive OR på match av path for children. Rendrer bare første treff.
function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Authenticate} />
        <Route path="/home" component={Feed} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </HashRouter>
  );
}

export default App;
