import React, { Component } from 'react';
import './App.css';
import Footer from "./components/Footer/Footer"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerDistance: 1,
      distance: 2,
      nbBar: 3,
      latLng: {}
    }
  }

  handleSliderData(dataType, data){
    this.setState({ dataType: data });
  }

  getLatlng(data) {
    this.setState({
      latLng: data
    })
  }
  render() {
    return (
      <div className="App">
        
        <Footer />
        
      </div>
    );
  }
}

export default App;
