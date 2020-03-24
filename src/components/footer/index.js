import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';

class Footer extends Component {
  render() {
    return(
      <div>
        <div className="footer-container">
          <div className="wraper">
            <RecentPost />
            <RecentNews />
            <ContactInfo />
          </div>
        </div>  
        <MenuLink />
      </div>   
    );
  }
}


class RecentPost extends Component {
  render() {
    return(
      <div className="recent-posts">
        <h2 className="heading">Recent Posts</h2>
        <ul>
          <li>How you can impact your customers</li>
          <li>Construction is all about quality</li>
          <li>Is your website user friendly</li>
          <li>HUGE offer weekly updates & more</li>
          <li>Your customer should love your web</li>
        </ul>
      </div>
    )
  }
}

class RecentNews extends Component {
  render() {
    return(
      <div className="recent-news">
        <h2 className="heading">Recent News</h2>
        <div>
          <div className="news-list">
            <div className="box orange"></div>
            <p>A clean website gives more experince to the visitor</p>
          </div>
          <div className="news-list">
            <div className="box green"></div>
            <p>A clean website gives more experince to the visitor</p>
          </div>
        </div>
      </div>
    )
  }
}

class ContactInfo extends Component {
  render() {
    return(
      <div className="contact-info">
        <h2 className="heading">Contact Info</h2>
        <ul className="info-content">
          <li>
            <i><img src="https://img.icons8.com/nolan/64/email.png"/></i>
            <a className="value" href="mailto:hello@gmail.com">hello@gmail.com</a>
          </li>
          <li>
            <i><img src="https://img.icons8.com/nolan/64/phone-disconnected.png"/></i>
            <a className="value" href="tel:9999999999">9999999999</a>
          </li>
          <li>
            <i><img src="https://img.icons8.com/office/16/000000/location-off.png"/></i>
            <p className="value">United States</p>
          </li>
        </ul>
      </div>
    )
  }
}

class MenuLink extends Component {
  render() {
    return(
      <div className="link-conatainer">
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

export default Footer;