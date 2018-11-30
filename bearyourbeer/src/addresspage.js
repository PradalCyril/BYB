import React, { Component } from 'react';
import ListBar from './components/ListBar/ListBar'
//import SimpleMap from './components/Addressmap/SimpleMap';
import RangeSlider from './components/Personalised_box/RangeSlider';
import BarOnMap from './components/Bar_on_map/index'
let userRadius=1000;
class Addresspage extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps.data.beerDistance !== this.props.data.beerDistance) {
          userRadius = this.props.data.beerDistance * 1000
        }
      }
    componentDidMount() {
        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${this.props.data.latLng.lat},${this.props.data.latLng.lng}&radius=${userRadius}&type=bar&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(response => response.json())
            .then((data) => {
                this.props.getBars(data.results)
            });

    }
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
                <ListBar />
            </div>
        );
    }
}

export default Addresspage;

