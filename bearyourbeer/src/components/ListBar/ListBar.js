import React, { Component } from "react";
import "./ListBar.css"
import ItemBar from "./ItemBar/ItemBar";

class ListBar extends Component {
constructor(props){
  super(props);
  this.state={
    changeNbBar:false,
  }
}
componentDidUpdate(){
  
  
  console.log(this.props.data)
}
  render() {
    const itemBar = this.props.data.bars.slice(0,this.props.data.nbBar).map((test, index) => (
      <ItemBar key={index} data={test} />
    ))
    return (
      <div className="relative">
      <div className="list-bar--container">
        <p className="list-bar--title">We found {this.props.data.nbBar} bars you could be interested in.</p>
          {itemBar}
        
      </div>
      </div>
    )
  }
};

export default ListBar;