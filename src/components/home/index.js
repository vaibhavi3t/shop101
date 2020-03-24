import React, { Component } from 'react';
import './index.css';


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
      <div>
        <div className="phantom-header"></div>
        <div className="header-container" id="headerContainer">
        </div>
      </div>     
    );
  }
}

export default Home;