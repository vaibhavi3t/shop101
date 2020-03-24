import React, { Component } from 'react';
import './index.css';

class FeaturedWorks extends Component {
  render() {
    return(
      <section className="featured-works">
        <h2 className="heading">Featured Works</h2>
        <p className="info">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        <ul className="feature-types">
          <li>All</li>
          <li>Green Building</li>
          <li>Healthcare</li>
          <li>Interior Design</li>
          <li>Office</li>
        </ul>
        <ul className="feature-showcase">
          <li className="item1"></li>
          <li className="item2"></li>
          <li className="item3"></li>
          <li className="item4"></li>
          <li className="item5"></li>
          <li className="item6"></li>
        </ul>
        <ContactSection />
      </section>     
    );
  }
}

class ContactSection extends Component {
  render() {
    return(
      <div className="contact-us-container">
        <div className="contact-us-content">
          <h2 className="heading">Embedded in our culture of hard work, honesty, and getting the well done job</h2>
          <p className="sub-heading">It can be used on large scale projects as well as small scale projects without any problem</p>
          <div className="contact-btn">Contact Us Today</div>
        </div>
      </div>
    );
  }
}

export default FeaturedWorks;