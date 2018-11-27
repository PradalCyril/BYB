import React, { Component } from 'react';


import './App.css';


import BarOnMap from './components/Bar_on_map/index'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bars: []
    }
  }

  getBars(bar){
    this.setState({bars: bar})
  }
componentDidUpdate(){
  console.log(this.state.bars[0])
  console.log(this.state.bars[1])
  console.log(this.state.bars[2])
  console.log(this.state.bars[3])
  console.log(this.state.bars[4])
  console.log(this.state.bars[5])
}
  render() {
    return (
      <div>
        
        <BarOnMap 
          getBars={bar => this.getBars(bar)}
          
          />
      </div>
    );
  }
}

export default App;
