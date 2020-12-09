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
    <MDBFooter style={{backgroundColor: "#282c34", color:"#FFFFFF"}} className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Contact:</h5>
              <p>
                 E-Mail:  (Email goes here...) <br />
                 Phone:   (Phone number goes here...) <br />
                 Address: (Number, street name,
                           City, State, PIN) <br />
              </p>
              <br />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
      </React.Fragment>
    </div>
  );
}


export default App;

