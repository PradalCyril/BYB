import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import ListBar from './components/ListBar/ListBar'
=======
>>>>>>> 196cb3fffb8a5bc00a34d1cc1db8b3623d0214bc
import { Switch, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage/FirstPage';
import Geopage from './geopage';
import Addresspage from './addresspage';
import { DataProvider } from "./components/ContextApi/DataContext";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerDistance: 1,
      distance: 2,
      nbBar: 3,
      latLng: {},
      bars: ['first'],
      trajet: []
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

  goUpTrajet(data) {
    this.setState({
      trajet: data
    })
  }
 

  render() {
    return (
      <div>
<<<<<<< HEAD
      <ListBar/>
    

      
=======
>>>>>>> 196cb3fffb8a5bc00a34d1cc1db8b3623d0214bc
        <DataProvider value={this.state.latLng}>
          <Switch>
            <Route exact path="/" render={() => <FirstPage 
            latLngCallback={(data) => this.getLatlng(data)} />} />
            <Route path="/geopage" 
            render={props => <Geopage location={this.state.bars}
            latLngCallback={(data) => this.getLatlng(data)} 
            sliderCallback={(dataType, data) => this.handleSliderData(dataType, data)}
            data={this.state}
            getBars={bar => this.getBars(bar)}
            goUpTrajet={(data)=>this.goUpTrajet(data)}  />}/> 
            <Route path="/addresspage" 
            render={props => <Addresspage location={this.state.bars}
            latLngCallback={(data) => this.getLatlng(data)} 
            sliderCallback={(dataType, data) => this.handleSliderData(dataType, data)}
            data={this.state}
            getBars={bar => this.getBars(bar)} />}/>
          </Switch>
        </DataProvider>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 196cb3fffb8a5bc00a34d1cc1db8b3623d0214bc
    );
  }
}

export default App;
