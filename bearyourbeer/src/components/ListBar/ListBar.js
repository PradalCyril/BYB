import React, { Component } from "react";
import "./ListBar.css"
import ItemBar from "./ItemBar/ItemBar";

class ListBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bar: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?location=50.467444,4.869753&radius=100&type=cafe&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then((response) => response.json())
      .then((data) => this.setState({ bar: data.results }))
  }



  render() {

    const itemBar = this.state.bar.map((test, index) => (
      <ItemBar key={index} data={test} />
    ))
    return (
      <div>
         {itemBar}
      </div>
    )
  }
};


export default ListBar;