import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox'
import FirstPage from './components/FirstPage/FirstPage'
import {DataProvider, DataConsumer} from "./components/ContextApi/context";


class App extends Component {
  render() {
    return (
    
    <div>
    <DataConsumer>{context => <p>{context}</p>}
    </DataConsumer>
      
      <FirstPage />
    </div>
    );
  }
}

export default App;
