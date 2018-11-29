import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import {Switch, Route} from 'react-router-dom';
import Geopage from './Geo-page';
import Addresspage from './Address-page';
import SearchBox from './components/SearchBox/SearchBox'
import FirstPage from './components/FirstPage/FirstPage'

class App extends Component {
  render() {
    return (
      <div>
	    <Switch>
		<Route exact path="/" component={FirstPage} />
                  <Route path="/geo-page" render={props => <Geopage location={this.state.bars} />} />
                  <Route path="/address-page" render={props => <Addresspage location={this.state.bars} addresslocation={this.state.data} />} />
	    </Switch>
      </div>
    );
  }
}

export default App;
