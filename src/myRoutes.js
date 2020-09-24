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
import Logout from './components/logout';
import ServiceForm from './components/service-form';
import ServiceDetails  from "./components/service-details";
function MyRoutes() {
  return (
    <Router>
         <SideMenuBar/>
          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={Login} />
              <Route exact path="/account-details" component={ServiceForm} />
              <Route exact path="/accountinfo" component={ServiceDetails} />
              <Route exact path="/logout" component={Logout} />

            </Switch>
      </Router>       

  );
}

export default MyRoutes;
