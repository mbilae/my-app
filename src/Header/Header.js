import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";


class Header extends React.Component {
    render() {

        return (
            
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link to ="/">Home</Link> &nbsp;&nbsp;
        </li>
        <li class="nav-item">
        <Link to ="/about">About</Link> &nbsp;&nbsp;
        </li>
        <li class="nav-item">
        <Link to ="/team">Team</Link>   &nbsp;&nbsp;
        </li>
        <li class="nav-item">
        <Link to ="/product">Product</Link>  &nbsp;&nbsp;
        </li>
        <li class="nav-item">
        <Link to ="/contact">Contact</Link>  &nbsp;&nbsp;
        </li>
        <li class="nav-item">
        <Link to ="/login">Login</Link>  &nbsp;&nbsp;
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</div>
            
        )
    };
};
export default Header;

