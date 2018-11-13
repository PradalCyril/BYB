import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/FirstPage/FirstPage.js';
import Routing from "./Routing";

class App extends Component {
  render() {
    return (
      <div>
      <Routing />
      </div>

    );
  }
}

export default App;
