import React, { Component } from 'react';
import './index.css';
import Header from '../header';
import Banner from '../banner';
import Services from '../services';
import AdditionalServices from '../additionalServices';
import FeaturedWorks from '../featuredWorks';
import Footer from '../footer';

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
        <Header />
        <Banner />
        <Services />
        <AdditionalServices />
        <FeaturedWorks />
        <Footer />
      </div>     
    );
  }
}

export default Home;