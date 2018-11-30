import React, { Component } from 'react';
import RangeSlider from './components/Personalised_box/RangeSlider';
import ListBar from './components/ListBar/ListBar'
import Waypoints from './components/waypoints/index';


//import SimpleMap from './components/Geomap/SimpleMap';
let userRadius=1000;
class Geopage extends Component {
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
                <Waypoints callback={this.props.data}/>
                <RangeSlider
                    latLngCallback={(data) => this.props.latLngCallback(data)}
                    sliderCallback={(dataType, data) => this.props.sliderCallback(dataType, data)}

                />
                {/*<SimpleMap location={this.props.location} addressloc={this.props.data}/>*/}
                <ListBar />
            </div>
        );
    }
}

export default Geopage;
