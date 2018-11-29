import React, { Component } from "react";
import "./ListBar.css"
import ItemBar from "./ItemBar/ItemBar";
class ListBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bar: [],
      star: []
    };
  }


  componentDidMount() {

    fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?location=50.467444,4.869753&radius=100&type=bar&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ bar: data.results })
      }
      )
  }

  render() {

    const itemBar = this.state.bar.map((test, index) => (
      <ItemBar key={index} data={test} />
    ))

    return (
      <div className="relative">
      <div className="list-bar--container">
        <p className="list-bar--title">We found {this.state.bar.length} bars you could be interested in.</p>
        {itemBar}
      </div>
      </div>
    )
  }
};

export default ListBar;