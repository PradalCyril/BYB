import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
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
		polesud: {
			lat: -84.3905373,
			lng: -170.2775355
		},
		haveUsersLocation: false,
		zoom: 12

	}
	componentWillMount() {		
		loc() {
			this.setState({
				position: [this.props.data.lat, this.props.data.long]
			});
		}	

	}

	render() {
		const position = [this.state.location.lat, this.state.location.lng];
		return (
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
			lat={this.props.location[0].geometry.location.lat}
			lng={this.props.location[0].geometry.location.lng}
			>
			<AnyReactComponent2
			lat={this.props.location[1].geometry.location.lat}
			lng={this.props.location[1].geometry.location.lng}

			/>
			<AnyReactComponent3
			lat={this.props.location[2].geometry.location.lat}
			lng={this.props.location[2].geometry.location.lng}

			/>
			<AnyReactComponent4
			lat={this.props.location[3].geometry.location.lat}
			lng={this.props.location[3].geometry.location.lng}

			/>
			<AnyReactComponent5
			lat={this.props.location[4].geometry.location.lat}
			lng={this.props.location[4].geometry.location.lng}

			/>
			<AnyReactComponent6
			lat={this.props.location[5].geometry.location.lat}
			lng={this.props.location[5].geometry.location.lng}

			/>
			<AnyReactComponent7
			lat={this.props.location[6].geometry.location.lat}
			lng={this.props.location[6].geometry.location.lng}

			/>
			<AnyReactComponent8
			lat={this.props.location[7].geometry.location.lat}
			lng={this.props.location[7].geometry.location.lng}

			/>
			<AnyReactComponent9
			lat={this.props.location[8].geometry.location.lat}
			lng={this.props.location[8].geometry.location.lng}

			/>
			<AnyReactComponent10
			lat={this.props.location[9].geometry.location.lat}
			lng={this.props.location[9].geometry.location.lng}
			/>
			</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
