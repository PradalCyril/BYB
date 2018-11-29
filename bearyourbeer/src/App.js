import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import { Switch, Route } from 'react-router-dom';
import Geopage from './geopage';
import Addresspage from './addresspage';
import {DataProvider} from "./components/ContextApi/DataContext";

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

        <Switch>
          <Route exact path="/" render={() => <FirstPage callback={(data) => this.getLatlng(data)} />} />
          <Route path="/geopage" render={props => <Geopage location={this.state.bars} />} />
          <Route path="/addresspage" render={props => <Addresspage location={this.state.bars} addresslocation={this.state.data} />} />
        </Switch>
        </DataProvider>

      </div>
    );
  }
}

export default App;
