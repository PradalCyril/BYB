import React, { Component } from 'react';

import './App.css';
import Perso_box from './components/Personalised_box/Perso_box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Perso_box/>
        </header>
      </div>
    );
  }
}

export default App;
