import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import {Switch, Route} from 'react-router-dom';
import Geo-page from './Geo-page';
import Address-page from './Address-page';
import SearchBox from './components/SearchBox/SearchBox'
import FirstPage from './components/FirstPage/FirstPage'

class App extends Component {
  render() {
    return (
      <div>
	    <Switch>
		<Route exact path="/" component={FirstPage} />
                  <Route path="/geo-page" render={props => <Geo-page location={this.state.bars} />} />
                  <Route path="/address-page" component={Address-page} />
	    </Switch>
      </div>
    );
  }
}

export default App;
