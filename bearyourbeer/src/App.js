import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import {Switch, Route} from 'react-router-dom';
import Geopage from './geopage';
import Addresspage from './addresspage';
import SearchBox from './components/SearchBox/SearchBox'
import FirstPage from './components/FirstPage/FirstPage'

class App extends Component {
	constructor(props){
		this.geocoords = this.geocoords.bind(this);
		this.state = {
			geolocated: false,
			Latlng: []
		}
<<<<<<< HEAD
	}
	geocoords(str) {
		this.setState({Latlng: str})
=======
		geocoords(coords) {
			this.setState({Latlng: coords})
		}
>>>>>>> 50492d3ab2ffc64353a3fe463c0f9acccd9625fd
	}
  render() {
    return (
      <div>
	    <Switch>
		<Route exact path="/" component={FirstPage} />
                  <Route path="/geopage" render={props => <Geopage location={this.state.bars} geolocated={this.state.geolocated} geocoords={this.geocoords} />} />
                  <Route path="/addresspage" render={props => <Addresspage location={this.state.bars} addresslocation={this.state.data} />} />
	    </Switch>
      </div>
    );
  }
}

export default App;
