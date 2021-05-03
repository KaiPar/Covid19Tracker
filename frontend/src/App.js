import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar'
 
import './index.css'
import { Home } from './Home';
import { About } from './About';
import { Blog } from './Blog'
import { Apps } from './Apps'
import { Videos } from './Videos'
import { C19 } from './C19'

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function App(){
  return (
    <div class="App">
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={C19} />
        <Route path="/about" component={About} />
    </Switch>
    </Router>
    </React.Fragment>
    </div>
  );
}


export default App;

