import React, { Component } from 'react';
import RangeSlider from './components/Personalised_box/RangeSlider';
import BarOnMap from './components/Bar_on_map/index'
//import SimpleMap from './components/Geomap/SimpleMap';

class Geopage extends Component {
    render() {
        return (
            <div>
                <RangeSlider
                    latLngCallback={(data) => this.props.latLngCallback(data)}
                    sliderCallback={(dataType, data) => this.props.sliderCallback(dataType, data)}

                />
                <BarOnMap
                    getBars={bar => this.props.getBars(bar)}
                    userLatLng={this.props.data.latLng}
                    userdistance={this.props.data.beerDistance}
                />
                {/*<SimpleMap location={this.props.location} addressloc={this.props.data}/>*/}
            </div>
        );
    }
}

export default Geopage;
