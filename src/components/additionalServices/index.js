import React, { Component } from 'react';
import './index.css';

class AdditionalServices extends Component {
  render() {
    return(
      <div className="additional-services">
        <div className="video-container">
        </div>
        <div className="services">
          <div className="list-item">
            <i><img src="https://img.icons8.com/dusk/64/000000/home.png"/></i>
            <div className="content">
              <h3 className="heading">General Builder</h3>
              <p className="sub-heading">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
          <div className="list-item">
            <i><img src="https://img.icons8.com/dusk/64/000000/home.png"/></i>
            <div className="content">
              <h3 className="heading">House Extensions</h3>
              <p className="sub-heading">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
          <div className="list-item">
            <i><img src="https://img.icons8.com/dusk/64/000000/home.png"/></i>
            <div className="content">
              <h3 className="heading">Refurbishment</h3>
              <p className="sub-heading">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
          </div>
        </div>
      </div>     
    );
  }
}

export default AdditionalServices;