import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage';
import { Switch, Route } from 'react-router-dom';
import Geopage from './geopage';
import Addresspage from './addresspage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FirstPage} />
          <Route path="/geopage" render={props => <Geopage location={this.state.bars} />} />
          <Route path="/addresspage" render={props => <Addresspage location={this.state.bars} addresslocation={this.state.data} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
