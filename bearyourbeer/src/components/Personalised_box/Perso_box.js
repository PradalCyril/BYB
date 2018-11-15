import React, { Component } from 'react';
import './Perso_box.css';
import Range_Slider from "./Range_Slider";
import SearchBox from '../SearchBox/SearchBox'



class Perso_box extends Component {
    constructor(props){
        super(props);
        this.state={
            uservalue:''
        }
    }
    render() {
        return (
            
            <div>
                <h1>{this.state.uservalue}</h1>
                <div className="perso-box">
                    {<Range_Slider lol={this.callback.bind(this,"lol")} titre={"Beer Distance : "} minimum={1} maximum={15} />}
                    {<Range_Slider titre={"Distance from the course : (km)"} minimum={2} maximum={10} />}
                    {<Range_Slider titre={"Nomber of Bars : "} minimum={3} maximum={10} taille={"100px"} />}
                </div>
                <div className="search-box">
                    <SearchBox />
                </div>
            </div>
        )
    }

    callback = (newValue) => {
        this.setState({uservalue:newValue});
    }
}
export default Perso_box;

