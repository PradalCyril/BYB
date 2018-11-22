import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import FirstPage from './components/FirstPage/FirstPage';
import MyMap from './components/Map/Map';
class App extends Component {
  render() {
    return (
    <div>
      <MyMap />
    </div>
    );
  }
}

export default App;
