import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Header extends Component {
  render() {
    return(
      <div className="header-container">
        <img
          className="logo"
          src="https://www.shop101.com/97c42d11c74ae4370b5d5a93d50bfb86.png"
          alt="shop101" />
          <MenuLink /> 
      </div>
    );
  }
}

class MenuLink extends Component {
  render() {
    return(
      <div className="menu-link">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Portfolio</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>
      </div>
    );
  }
}


export default Header;