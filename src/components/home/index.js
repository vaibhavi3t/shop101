import React, { Component } from 'react';
import './index.css';
import Banner from '../banner';
import Services from '../services';
import AdditionalServices from '../additionalServices';
import FeaturedWorks from '../featuredWorks';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state  = {
    }
  }

  componentWillMount() {
  }

  render() {
    return(
      <div className="container">
        <Banner />
        <Services />
        <AdditionalServices />
        <FeaturedWorks />
      </div>     
    );
  }
}

export default Home;