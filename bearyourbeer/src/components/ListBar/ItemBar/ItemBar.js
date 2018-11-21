import React, { Component } from "react";
import './ItemBar.css';

class ItemBar extends Component {
 constructor(props){
     super(props)
     this.state = {
         name : this.props.data.name || 'bare name',
         adress : this.props.data.formatted_address || 'bare adress' ,
         imgWidth : this.props.data.photos ? this.props.data.photos[0].width + "&photoreference=" : "",
         reference : this.props.data.photos ? this.props.data.photos[0].photo_reference + "&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I": "",
         initialLink : this.props.data.photos ? "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
         note : this.props.data.rating || "no rating"
     }



 }
    render() {
        return (
            <li className="item-bar">
                <div className="item-bar-container">
                    <div className="img-bar-container">
                        <img className="img-bar" src={ require('./img/icon-bar.png')/*this.state.initialLink + this.state.imgWidth  + this.state.reference*/ } alt={this.state.name} />
                    </div>
                    <div className="text-bar-container">
                        <h3 className="title-bar">{this.state.name}<span className="point-bar">{this.state.note}</span></h3>
                        <p className="adresse-bar">{this.state.adress}</p>
                    </div>
                </div>
            </li>
        )
    }
}

    export default ItemBar;