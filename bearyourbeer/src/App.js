import React, { Component } from 'react';


import './App.css';

import Range_slider from './components/Personalised_box/Range_Slider';



class App extends Component {
  constructor(props) {
    super(props);
    this.handleBeerDistance=this.handleBeerDistance.bind(this);
    this.handleDistance=this.handleDistance.bind(this);
    this.handleNbBar=this.handleNbBar.bind(this);
    this.state = {
      beerDistance: 1,
      distance: 2,
      nbBar: 3
    }
  }

  handleBeerDistance(user) {
    this.setState({ beerDistance: user });

  }
  handleDistance(user) {
    this.setState({ distance: user });
  }
  handleNbBar(user) {
    this.setState({ nbBar: user });
  }
  
  render() {
    return (
      <Range_slider
        onChangeValue1={(user) => this.handleBeerDistance(user)}
        onChangeValue2={(user) => this.handleDistance(user)}
        onChangeValue3={(user) => this.handleNbBar(user)}
      />
      
    );
  }
}

export default App;
