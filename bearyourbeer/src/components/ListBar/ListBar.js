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
    this.setState({bar: this.props.location})
  }
componentDidUpdate(){
  console.log(this.state.bar)
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