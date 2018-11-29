import React, { Component } from 'react';
<<<<<<< HEAD
import './App.css';
import ListBar from './components/ListBar/ListBar'

=======
import { Switch, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import Geopage from './geopage';
import Addresspage from './addresspage';
import { DataProvider } from "./components/ContextApi/DataContext";
>>>>>>> 02cede82e355c0a5f88eec205f183a4fc884bf59

import './App.css';

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
<<<<<<< HEAD
      <div>
      <ListBar/>
    </div>
=======

      <div>
        <DataProvider value={this.state.latLng}>

          <Switch>
            <Route exact path="/" render={() => <FirstPage 
            latLngCallback={(data) => this.getLatlng(data)} />} />
            <Route path="/geopage" 
            render={props => <Geopage location={this.state.bars}
            latLngCallback={(data) => this.getLatlng(data)} 
            sliderCallback={(dataType, data) => this.handleSliderData(dataType, data)} />} />
            <Route path="/addresspage" 
            render={props => <Addresspage location={this.state.bars}
            latLngCallback={(data) => this.getLatlng(data)} 
            sliderCallback={(dataType, data) => this.handleSliderData(dataType, data)}/>} />
          </Switch>
        </DataProvider>

      </div>
>>>>>>> 02cede82e355c0a5f88eec205f183a4fc884bf59
    );
  }
}

export default App;
