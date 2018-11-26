import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {  getLocation } from './API';
import ouvrebouteille from './ouvrebouteille2.svg';
const AnyReactComponent = ({ image }) => <div><img src={ouvrebouteille} alt="mais si c'est possible avec la carte kiwi!" height="42" width="42" /></div>;
 
class SimpleMap extends Component {
  state = {
	  location: {
                        lat: 50.400,
                        lng: 4.03
                },
                haveUsersLocation: false,
                zoom: 12

  }
        componentDidMount() {
                getLocation()
                        .then(location => {
                                this.setState({
                                        location,
                                        haveUsersLocation: true,
                                        zoom: 16
                                });
                        });

        }
 
  render() {
	  const position = [this.state.location.lat, this.state.location.lng];
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I" }}
          center={position}
          zoom={this.state.zoom}
        >
          <AnyReactComponent
            lat={this.state.location.lat}
            lng={this.state.location.lng}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;
