import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import Geopage from './geopage';
import Addresspage from './addresspage';
import { DataProvider } from "./components/ContextApi/DataContext";

import './App.css';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerDistance: 1,
      distance: 2,
      nbBar: 3,
      latLng: {},
      bars: []
    }
  }

  getBars(bar){
    this.setState({bars: bar})
  }
  handleSliderData(dataType, data){
    this.setState({ [dataType]: data });
  }

  getLatlng(data) {
    this.setState({
      latLng: data
    })
  }
componentDidUpdate(){
  console.log(this.state.bars)
}
  render() {
    return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div>
      <ListBar/>
    </div>
=======

>>>>>>> e6b4dbb0bae045d630c955d3e7dcc19400385fba
      <div>
        <DataProvider value={this.state.latLng}>

          <Switch>
            <Route exact path="/" render={() => <FirstPage 
            latLngCallback={(data) => this.getLatlng(data)} />} />
            <Route path="/geopage" 
            render={props => <Geopage location={this.state.bars}
            latLngCallback={(data) => this.getLatlng(data)} 
            sliderCallback={(dataType, data) => this.handleSliderData(dataType, data)}
            data={this.state}
            getBars={bar => this.getBars(bar)} />} />
            <Route path="/addresspage" 
            render={props => <Addresspage location={this.state.bars}
            latLngCallback={(data) => this.getLatlng(data)} 
            sliderCallback={(dataType, data) => this.handleSliderData(dataType, data)}
            data={this.state}
            getBars={bar => this.getBars(bar)} />}/>
          </Switch>
        </DataProvider>

      </div>
>>>>>>> 02cede82e355c0a5f88eec205f183a4fc884bf59
    );
  }
}

export default App;
