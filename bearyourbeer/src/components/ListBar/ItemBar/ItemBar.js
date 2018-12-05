import React, { Component } from "react";
import './ItemBar.css';
import Bubles from '../../FirstPage/bubles'

class ItemBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.data.name || 'bare name',
            adress: this.props.data.formatted_address || 'bare adress',
            imgWidth: this.props.data.photos ? this.props.data.photos[0].width + "&photoreference=" : "",
            reference: this.props.data.photos ? this.props.data.photos[0].photo_reference + "&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I" : "",
            initialLink: this.props.data.photos ? "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
            note: this.props.data.rating || "no rating",
            star: "",
            open: this.props.data.opening_hours === undefined ? "existepas" : this.props.data.opening_hours.open_now,
            colorOpen: "opening"
        }
    }
    componentDidUpdate(prevProps){
        if(prevProps.data.name !== this.props.data.name){
        this.setState({
            
                name: this.props.data.name,
                adress: this.props.data.formatted_address,
                imgWidth: this.props.data.photos ? this.props.data.photos[0].width + "&photoreference=" : "",
                reference: this.props.data.photos ? this.props.data.photos[0].photo_reference + "&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I" : "",
                initialLink: this.props.data.photos ? "https://maps.googleapis.com/maps/api/place/photo?maxwidth=" : "https://maps.gstatic.com/mapfiles/place_api/icons/bar-71.png",
                note: this.props.data.rating || "no rating",
                star: "",
                open: this.props.data.opening_hours === undefined ? "existepas" : this.props.data.opening_hours.open_now,
            

        })}
    }
    componentDidMount() {
        this.star()
        this.opening()
        Bubles.init(this.canvas);
    }

    star() {
        let star_svg = [
            '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#848484" data-name="Calque 1"/></g></svg>',
            '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#848484" data-name="Calque 1"/></g></svg>',
            '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#848484" data-name="Calque 1"/></g></svg>',
            '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#848484" data-name="Calque 1"/></g></svg>',
            '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#848484" data-name="Calque 1"/></g></svg>',
        ]
        let roundNote = Math.floor(this.state.note);
        let floatNote = Math.abs(this.state.note - roundNote);
        let floatNote2 = floatNote.toFixed(1);
        if (this.state.note % 2 === 0 || this.state.note % 2 === 1) {
            for (let i = 0; i < this.state.note; i++) {
                star_svg[i] = '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#ffd400" data-name="Calque 1"/></g></svg>'
            }
        } else {
            for (let i = 0; i < roundNote; i++) {
                star_svg[i] = '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#FFD400" data-name="Calque 1"/></g></svg>'
            }
            if (floatNote2 > 0.2 && floatNote2 < 0.7) {
                star_svg[roundNote] = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><g data-name="Calque 1"><path d="M22.9 0a1.84 1.84 0 0 0-1.67 1L15.6 12.46a1.84 1.84 0 0 1-1.4 1L1.59 15.31a1.85 1.85 0 0 0-1 3.16l9.13 8.89a1.89 1.89 0 0 1 .5 1.64L8.07 41.56a1.85 1.85 0 0 0 2.69 2L22 37.59a1.89 1.89 0 0 1 .87-.21z" fill="#ffd400"/><path d="M22.9 0a1.82 1.82 0 0 1 1.66 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.88 1.88 0 0 0-.86-.21z" fill="#848484"/></g></g></svg>'
            } else if (floatNote2 > 0.7) {
                star_svg[roundNote] = '<svg viewBox="0 0 45.8 43.74"><g data-name="Calque 2"><path d="M24.56 1l5.64 11.46a1.82 1.82 0 0 0 1.4 1l12.61 1.84a1.85 1.85 0 0 1 1 3.16l-9.12 8.89a1.84 1.84 0 0 0-.51 1.65l2.15 12.55a1.85 1.85 0 0 1-2.69 2l-11.28-5.96a1.89 1.89 0 0 0-1.73 0l-11.27 5.93a1.85 1.85 0 0 1-2.69-2L10.22 29a1.89 1.89 0 0 0-.53-1.65L.56 18.47a1.85 1.85 0 0 1 1-3.16l12.64-1.84a1.84 1.84 0 0 0 1.4-1L21.23 1a1.86 1.86 0 0 1 3.33 0z" fill="#FFD400" data-name="Calque 1"/></g></svg>'
            }
        }
        
        this.setState({ star: star_svg })
    }

    opening(){
        if(this.state.open === "existepas"){
            this.setState({open: ""})
        }else if(this.state.open){
            this.setState({open: "Open",
            colorOpen: "opening-green"
        })
        }else{
            this.setState({open: "Close",
            colorOpen: "opening-red"})
        }
    }


    render() {
        return (
            <li className="item-bar">
                <div className="item-bar-container">
                    <div className="canvas-container">
                        <canvas ref={(el) => { this.canvas = el }} id="canvas"></canvas>
                    </div>
                    <div className="img-bar-container">
                        <img className="img-bar" src={this.state.initialLink + this.state.imgWidth + this.state.reference} alt={this.state.name} />
                    </div>
                    <div className="text-bar-container">
                        <h3 className="title-bar">{this.state.name}</h3>
                        <p className="star-svg" dangerouslySetInnerHTML={{
                             __html: this.state.star[0] 
                             + this.state.star[1] 
                             + this.state.star[2] 
                             + this.state.star[3] 
                             + this.state.star[4]
                             }} />
                        <p className="adresse-bar">{this.state.adress}</p>
                        <p className={ "opening-bar " + this.state.colorOpen}>{this.state.open}</p>
                        
                    </div>
                </div>
            </li>
        )
    }
}

export default ItemBar;