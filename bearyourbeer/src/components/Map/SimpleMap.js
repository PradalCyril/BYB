import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {  getLocation } from './API';
import ouvrebouteille from './ouvrebouteille2.svg';
import pin1 from './pin1.svg';
import pin2 from './pin2.svg';
import pin3 from './pin3.svg';
import pin4 from './pin4.svg';
import pin5 from './pin5.svg';
import pin6 from './pin6.svg';
import pin7 from './pin7.svg';
import pin8 from './pin8.svg';
import pin9 from './pin9.svg';
import pin10 from './pin10.svg';


const AnyReactComponent = ({ image }) => <div><img src={ouvrebouteille} alt="mais si c'est possible avec la carte kiwi!" height="42" width="42" /></div>;
const AnyReactComponent1 = ({ image }) => <div><img src={pin1} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent2 = ({ image }) => <div><img src={pin2} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent3 = ({ image }) => <div><img src={pin3} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent4 = ({ image }) => <div><img src={pin4} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent5 = ({ image }) => <div><img src={pin5} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent6 = ({ image }) => <div><img src={pin6} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent7 = ({ image }) => <div><img src={pin7} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent8 = ({ image }) => <div><img src={pin8} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent9 = ({ image }) => <div><img src={pin9} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;
const AnyReactComponent10 = ({ image }) => <div><img src={pin10} alt="mais si c'est possible avec la carte kiwi!" height="35" width="42" /></div>;

class SimpleMap extends Component {
	super(props)
	state = {
		location: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar1: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar2: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar3: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar4: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar5: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar6: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar7: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar8: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar9: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		bar10: {
			lat: -84.3905373,
			lng: -170.2775355
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
			lat={this.props.bar1.lat}
			lng={this.props.bar1.lng}
			/>
			<AnyReactComponent2
			lat={this.props.bar2.lat}
			lng={this.props.bar2.lng}
			/>
			<AnyReactComponent3
			lat={this.props.bar3.lat}
			lng={this.props.bar3.lng}
			/>
			<AnyReactComponent4
			lat={this.props.bar4.lat}
			lng={this.props.bar4.lng}
			/>
			<AnyReactComponent5
			lat={this.props.bar5.lat}
			lng={this.props.bar5.lng}
			/>
			<AnyReactComponent6
			lat={this.props.bar6.lat}
			lng={this.props.bar6.lng}
			/>
			<AnyReactComponent7
			lat={this.props.bar7.lat}
			lng={this.props.bar7.lng}
			/>
			<AnyReactComponent8
			lat={this.props.bar8.lat}
			lng={this.props.bar8.lng}
			/>
			<AnyReactComponent9
			lat={this.props.bar9.lat}
			lng={this.props.bar9.lng}
			/>
			<AnyReactComponent10
			lat={this.props.bar10.lat}
			lng={this.props.bar10.lng}
			/>


			</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
