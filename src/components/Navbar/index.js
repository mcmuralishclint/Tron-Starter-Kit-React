import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends Component {
  
  render() {

    return (
        <div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://www.linkedin.com/in/mcmuralishclint"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escrower
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                General
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/about">About</Link></li>
              </ul>
            </li>

            
          </ul>
          </div>
        </nav> 
        </div>

    );
  }
}

export default Navbar;
