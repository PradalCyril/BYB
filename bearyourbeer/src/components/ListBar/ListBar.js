import React, { Component } from "react";
import "./ListBar.css"
import ItemBar from "./ItemBar/ItemBar";

class ListBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bar: [],
      numberBar: "2"
    };

    this.countbar = this.countbar.bind(this);
  }


  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?location=50.467444,4.869753&radius=100&type=bar&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ bar: data.results })
        this.countbar()
      }
      )

  }

  countbar() {
    const constNumberBar = this.state.bar.length;
    this.setState({ numberBar: constNumberBar });
  }




  render() {

    const itemBar = this.state.bar.map((test, index) => (
      <ItemBar key={index} data={test} />
    ))

    return (
      <div className="container-list-bar">
        <p>We found {this.state.numberBar} bars you could be interested in.</p>
        {itemBar}
      </div>
    )
  }
};

export default ListBar;