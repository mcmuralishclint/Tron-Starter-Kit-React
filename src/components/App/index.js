import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from 'components/Navbar';
import Main from 'components/Main';
import About from 'components/About';

class App extends Component {
  render() {
    return (

      <div>
        <Router>
          <div>
            <Navbar/>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <Main/>
                <Route exact path="/" />
              </div>
              <div class="col-sm-6">
                <Route exact path="/about" component={() => <About />} />
              </div>
            </div>
          </div> 
          
          
          
        </Router>
      </div>
    );
  }
}

export default App;
