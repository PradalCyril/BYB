import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import {Switch, Route} from 'react-router-dom';
import Geo-page from './Geo-page';
import Address-page from './Address-page';
class App extends Component {
  render() {
    return (
      <div>
	    <Switch>
		<Route exact path="/" component={FirstPage} />
                  <Route path="/geo-page" component={Geo-page} />
                  <Route path="/address-page" component={Address-page} />

	    </Switch>
      </div>

    );
  }
}

export default App;
