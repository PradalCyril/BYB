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
         note : this.props.data.rating || "no rating",
         star: []
     }
     
 }
 

componentDidMount(){
    let star_svg = '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#ffd400" data-name="Calque 1"/></g></svg>'
    for(let i = 0; i > this.state.note; i++ ){
        star_svg += star_svg;
    }
    console.log(star_svg)
    this.setState({ star: star_svg })

}

 
    render() {    
        return (
            <li className="item-bar">
                <div className="item-bar-container">
                    <div className="img-bar-container">
                        <img className="img-bar" src={this.state.initialLink + this.state.imgWidth  + this.state.reference} alt={this.state.name} />
                    </div>
                    <div className="text-bar-container">
                        <h3 className="title-bar">{this.state.name}<span className="point-bar">{this.state.note}</span></h3>
                        <p className="star-svg" dangerouslySetInnerHTML={{__html: this.state.star}} />
                        <p className="adresse-bar">{this.state.adress}</p>
                    </div>
                </div>
            </li>
        )
    }
}

    export default ItemBar;