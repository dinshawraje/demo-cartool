import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home';
import SideMenuBar from './components/side-menu';
import SignUp from './components/signup';
import Login from './components/login';
import ServiceForm from './components/service-form';

function MyRoutes() {
  return (
    <Router>
         <SideMenuBar/>
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/account-details" component={ServiceForm} />

            </Switch>
      </Router>       

  );
}

export default MyRoutes;
