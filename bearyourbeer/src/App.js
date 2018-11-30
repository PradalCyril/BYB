import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import SimpleMap from './components/Geomap/SimpleMap';
class App extends Component {
  render() {
    return (
    <div>
      <SimpleMap />
    </div>
    );
  }
}

export default App;
