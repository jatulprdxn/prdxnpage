import React, { Component } from 'react'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"; 
import Header from '../component/header/header';
import Login from "../Pages/loginpage";
import Details from '../Pages/details';

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="" component={Header} />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/details" component={Details} />
          </Switch>      
        </div>
      </Router>
    )
  }
}
