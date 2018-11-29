import React, { Component } from 'react';
import ListBar from './components/ListBar/ListBar'
//import SimpleMap from './components/Addressmap/SimpleMap';
import Range_slider from './components/Personalised_box/Range_Slider';

class Addresspage extends Component {
    render() {
        return (
            <div>
                <Range_slider
                    latLngCallback={(data) => this.props.latLngCallback(data)}
                    sliderCallback={(dataType, data) => this.props.sliderCallback(dataType, data)}
                />
                {/*<SimpleMap location={this.props.location} addressloc={this.props.data}/>*/}
                <ListBar />
            </div>
        );
    }
}s

export default Addresspage;

