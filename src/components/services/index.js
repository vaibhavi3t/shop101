import React, { Component } from 'react';
import './index.css';

class Banner extends Component {
  render() {
    return(
      <section className="services-section">
        <h2 className="heading">OUR SERVICES</h2>
        <p className="service-info">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

        <ul className="service-list">
          <li className="renovation-service">
            <div className="service-image"></div>
            <h3>RENOVATIONS</h3>
            <p className="info">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <a href="#" className="readme-link">READ MORE</a>
          </li>
          <li className="consulting-service">
            <div className="service-image"></div>
            <h3>CONSULTING</h3>
            <p className="info">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <a href="#" className="readme-link">READ MORE</a>
          </li>
          <li className="house-service">
            <div className="service-image"></div>
            <h3>SMART HOUSES</h3>
            <p className="info">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <a href="#" className="readme-link">READ MORE</a>
          </li>
        </ul>
      </section>     
    );
  }
}

export default Banner;