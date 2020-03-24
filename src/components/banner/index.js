import React, { Component } from 'react';
import './index.css';

class Banner extends Component {
  render() {
    return(
      <div className="banner">
        <div className="main-banner">
          <div className="banner-content">
            <h1 className="heading">WE DO BIG THINGS <br /> WITH BIG IDEAS</h1>
            <p className="sub-heading">Talk to Our Experts Get your dream home done. If you dream of designing a new home thats take full advantage of the unique geography and views of land that you love</p>
              <a href="#" className="explore-btn">Explore Now</a>
          </div>
        </div>
        <div className="project-quote">
          <div>
            <span className="info">Consulting and Estimate For Your Project, </span>
            <span className="contact-link">Contact Us Today</span>
            <a href="#" className="quote-btn">Get a Quote</a>
          </div>
        </div>
      </div>     
    );
  }
}

export default Banner;