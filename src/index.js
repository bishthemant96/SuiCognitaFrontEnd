import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';

//Pages
import Dashboard from './dashboard';
import Login from './login';
import Register from './register';
import Preferences from './preferences';
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/Dashboard" component={Dashboard} />
      <Route path="/Preferences" component={Preferences} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
