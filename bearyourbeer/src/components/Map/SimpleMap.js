import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {  getLocation } from './API';
import ouvrebouteille from './ouvrebouteille2.svg';
import pin1 from './pin1.svg';
import pin2 from './pin2.svg';
import pin3 from './pin3.svg';
import pin4 from './pin4.svg';

const AnyReactComponent = ({ image }) => <div><img src={ouvrebouteille} alt="mais si c'est possible avec la carte kiwi!" height="42" width="42" /></div>;
const AnyReactComponent1 = ({ image }) => <div><img src={pin1} alt="mais si c'est possible avec la carte kiwi!" height="42" width="42" /></div>;
const AnyReactComponent2 = ({ image }) => <div><img src={pin2} alt="mais si c'est possible avec la carte kiwi!" height="42" width="42" /></div>;
const AnyReactComponent3 = ({ image }) => <div><img src={pin3} alt="mais si c'est possible avec la carte kiwi!" height="42" width="42" /></div>;
const AnyReactComponent4 = ({ image }) => <div><img src={pin4} alt="mais si c'est possible avec la carte kiwi!" height="42" width="42" /></div>;

class SimpleMap extends Component {
	state = {
		location: {
			lat: 50.8504500,
			lng: 4.3487800
		},
		bar1: {
			lat: 50.450,
			lng: 4.05
		},
		bar2: {
			lat: 50.350,
			lng: 4.06
		},
		bar3: {
			lat: 50.380,
			lng: 4.08
		},
		bar4: {
			lat: 50.00,
			lng: 50.00
		},
		bar5: {
			lat: 50.00,
			lng: 50.00
		},
		bar6: {
			lat: 50.00,
			lng: 50.00
		},
		bar7: {
			lat: 50.00,
			lng: 50.00
		},
		bar8: {
			lat: 50.00,
			lng: 50.00
		},
		bar9: {
			lat: 50.00,
			lng: 50.00
		},
		bar10: {
			lat: 50.00,
			lng: 50.00
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
			<AnyReactComponent1
			lat={this.state.bar1.lat}
			lng={this.state.bar1.lng}
			/>
			<AnyReactComponent2
			lat={this.state.bar2.lat}
			lng={this.state.bar2.lng}
			/>
			<AnyReactComponent3
			lat={this.state.bar3.lat}
			lng={this.state.bar3.lng}
			/>
			<AnyReactComponent4
			lat={this.state.bar4.lat}
			lng={this.state.bar4.lng}
			/>

			</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
