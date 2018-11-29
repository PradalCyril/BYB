import React, { Component } from 'react';
import Range_slider from './components/Personalised_box/Range_Slider';
//import SimpleMap from './components/Geomap/SimpleMap';
class Geopage extends Component {
    render() {
        return (
            <div>
                <Range_slider
                    latLngCallback={(data) => this.props.latLngCallback(data)}
                    sliderCallback={(dataType, data) => this.props.sliderCallback(dataType, data)}

                />
                <BarOnMap
                    getBars={bar => this.props.getBars(bar)}
                    userLatLng={this.props.latLng}
                    userdistance={this.props.beerDistance}
                />
                {/*<SimpleMap location={this.props.location} addressloc={this.props.data}/>*/}
            </div>
        );
    }
}

export default Geopage;
