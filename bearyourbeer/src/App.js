import React, { Component } from 'react';


import './App.css';

import Range_slider from './components/Personalised_box/Range_Slider';



class App extends Component {
  constructor(props) {
    super(props);
    this.handBeerDistance=this.handBeerDistance.bind(this);
    this.handDistance=this.handDistance.bind(this);
    this.handNbBar=this.handNbBar.bind(this);
    this.state = {
      uservalue1: 1,
      uservalue2: 2,
      uservalue3: 3
    }
  }

  handBeerDistance(user) {
    this.setState({ uservalue1: user });

  }
  handDistance(user) {
    this.setState({ uservalue2: user });
  }
  handNbBar(user) {
    this.setState({ uservalue3: user });
  }
  
  render() {
    return (
      <Range_slider
        onChangeValue1={this.handBeerDistance}
        onChangeValue2={this.handDistance}
        onChangeValue3={this.handNbBar}
      />
      
    );
  }
}

export default App;
