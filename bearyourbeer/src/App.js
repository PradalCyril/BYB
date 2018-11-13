import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage.js';
import {Switch, Route} from 'react-router-dom';
import Geo_page from './Geo_page';
import Address_page from './Address_page';
class App extends Component {
  render() {
    return (
      <div>
	    <Switch>
		<Route exact path="/" component={FirstPage} />
                  <Route path="/Geo_page" component={Geo_page} />
                  <Route path="/Address_page" component={Address_page} />

	    </Switch>
      </div>

    );
  }
}

export default App;
