import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox'
import FirstPage from './components/FirstPage/FirstPage'


class App extends Component {
  render() {
    return (
    <div>
      <SearchBox />
      <FirstPage />
    </div>
    );
  }
}

export default App;
