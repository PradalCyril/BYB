import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import FirstPage from './components/FirstPage/FirstPage';
import SimpleMap from './components/Map/SimpleMap';
class App extends Component {
  render() {
    return (
    <span>
      <SimpleMap />
    </span>
    );
  }
}

export default App;
