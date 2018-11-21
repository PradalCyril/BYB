import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox'
import FirstPage from './components/FirstPage/FirstPage'
import {DataProvider, DataConsumer} from "./components/ContextApi/DataContext";


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    latLng: {}
  }
}

getLatlng(data){
  this.setState({
    latLng : data
  })
}
  render() {
    return (
    
    <div>

        <DataProvider value={this.state.latLng}>
          <FirstPage callback={(data) => this.getLatlng(data)} />
        </DataProvider>
      
    </div>
    );
  }
}

export default App;
