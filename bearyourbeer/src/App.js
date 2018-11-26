import React, { Component } from 'react';


import './App.css';

import Range_slider from './components/Personalised_box/Range_Slider';
import BarOnMap from './components/Bar_on_map/index'


class App extends Component {
  constructor(props) {
    super(props);
    this.handBeerDistance = this.handBeerDistance.bind(this);
    this.handDistance = this.handDistance.bind(this);
    this.handNbBar = this.handNbBar.bind(this);
    this.state = {
      uservalue1: 1,
      uservalue2: 2,
      uservalue3: 3,
      bar1: [],
      bar2: [],
      bar3: [],
      bar4: [],
      bar5: [],
      bar6: [],
      bar7: [],
      bar8: [],
      bar9: [],
      bar10: []
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
  getFirstBar(bar){
    this.setState({bar1: bar})
  }
  getSecondBar(bar){
    this.setState({bar2: bar})
  }
  getThirdBar(bar){
    this.setState({bar3: bar})
  }
  getForthBar(bar){
    this.setState({bar4: bar})
  }
  getFifthBar(bar){
    this.setState({bar5: bar})
  }
  getSixthBar(bar){
    this.setState({bar6: bar})
  }
  getSeventhBar(bar){
    this.setState({bar7: bar})
  }
  getEighthBar(bar){
    this.setState({bar8: bar})
  }
  getNinthBar(bar){
    this.setState({bar9: bar})
  }
  getTenthBar(bar){
    this.setState({bar10: bar})
  }
componentDidUpdate(){
  console.log(this.state.bar1)
}
  render() {
    return (
      <div>
        <Range_slider
          onChangeValue1={this.handBeerDistance}
          onChangeValue2={this.handDistance}
          onChangeValue3={this.handNbBar}
        />
        <BarOnMap 
          getBar1={(bar) => getFirstBar(bar)}
          getBar2={(bar) => getSecondBar(bar)}
          getBar3={(bar) => getThirdBar(bar)}
          getBar4={(bar) => getForthBar(bar)}
          getBar5={(bar) => getFiveBar(bar)}
          getBar6={(bar) => getSexthBar(bar)}
          getBar7={(bar) => getSeventhBar(bar)}
          getBar8={(bar) => getEightBar(bar)}
          getBar9={(bar) => getNinthBar(bar)}
          getBar10={(bar) => getTenthBar(bar)}
          />
      </div>
    );
  }
}

export default App;
