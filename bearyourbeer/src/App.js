import React, { Component } from 'react';
import './App.css';

import ListBar from './components/ListBar/ListBar'

import SearchBox from './components/SearchBox/SearchBox'
import FirstPage from './components/FirstPage/FirstPage'



class App extends Component {
  render() {
    return (
      <ListBar/>
    <div>
      <FirstPage />
    </div>
    );
  }
}

export default App;
