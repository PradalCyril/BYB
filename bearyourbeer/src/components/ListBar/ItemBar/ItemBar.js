import React, { Component } from "react";
import './ItemBar.css';

class ItemBar extends Component {
 constructor(props){
     super(props)
     this.state = {
         name : this.props.data.name || 'bare name',
         adress : this.props.data.adress || 'bare adress' ,
         imgWidth : this.props.data.photos ? this.props.data.photos[0].width : 500,
         reference : this.props.data.photos ? this.props.data.photos[0].photo_reference: "rrrr"
     }



 }
    render() {
        return (
            <li className="item-bar">
                <div className="item-bar-container">
                    <div className="img-bar-container">
                        <img className="img-bar" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=" + this.state.imgWidth + "&photoreference=" + this.state.reference + "&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I"} alt={this.state.name} />
                    </div>
                    <div className="text-bar-container">
                        <h3 className="title-bar">{this.state.name}<span className="point-bar"></span></h3>
                        <p className="adresse-bar">{this.state.adress}</p>
                    </div>
                </div>
            </li>
        )
    }
}

    export default ItemBar;