import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {  getLocation } from './API';
import ouvrebouteille from './ouvrebouteille2.svg';
import './map.css';
import svg1 from './svg1.svg';
import svg2 from './svg2.svg';
import svg3 from './svg3.svg';
import svg4 from './svg4.svg';
import svg5 from './svg5.svg';
import svg6 from './svg6.svg';
import svg7 from './svg7.svg';
import svg8 from './svg8.svg';
import svg9 from './svg9.svg';
import svg10 from './svg10.svg';

const AnyReactComponent = () => <div><img src={ouvrebouteille} alt="location pin" height="42" width="42" /></div>;
const AnyReactComponent1 = ({ image }) => <div><img src={svg1} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent2 = ({ image }) => <div><img src={svg2} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent3 = ({ image }) => <div><img src={svg3} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent4 = ({ image }) => <div><img src={svg4} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent5 = ({ image }) => <div><img src={svg5} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent6 = ({ image }) => <div><img src={svg6} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent7 = ({ image }) => <div><img src={svg7} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent8 = ({ image }) => <div><img src={svg8} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent9 = ({ image }) => <div><img src={svg9} alt="location pin" height="42" width="35" /></div>;
const AnyReactComponent10 = ({ image }) => <div><img src={svg10} alt="location pin" height="42" width="35" /></div>;

class SimpleMap extends Component {
	constructor(props){	
		super(props)
		this.state = {
			location: {
				lat: 50.8422864,
				lng: 4.3639914
			},
			pin1: {
				lat: -81.00,
				lng: 57.00
			},
			pin2: {
				lat: -81.00,
				lng: 57.00
			},
			pin3: {
				lat: -81.00,
				lng: 57.00
			},
			pin4: {
				lat: -81.00,
				lng: 57.00
			},
			pin5: {
				lat: -81.00,
				lng: 57.00
			},
			pin6: {
				lat: -81.00,
				lng: 57.00
			},
			pin7: {
				lat: -81.00,
				lng: 57.00
			},
			pin8: {
				lat: -81.00,
				lng: 57.00
			},
			pin9: {
				lat: -81.00,
				lng: 57.00
			},
			pin10: {
				lat: -81.00,
				lng: 57.00
			},
			polesud: {
				lat: -84.3905373,
				lng: -170.2775355
			},
			haveUsersLocation: false,
			zoom: 12,
			locIsReady: false
		}
	}
	componentDidUpdate(prevProps) {
		console.log("ma postion1" ,this.props.data.latLng)

		
		if (prevProps.location !== this.props.location) {
			this.setState({location: this.props.data.latLng})
			this.setState({pin1: this.props.location[0].geometry.location})
			this.setState({pin2: this.props.location[1].geometry.location})
			this.setState({pin3: this.props.location[2].geometry.location})
			this.setState({pin4: this.props.location[3].geometry.location})
			this.setState({pin5: this.props.location[4].geometry.location})
			this.setState({pin6: this.props.location[5].geometry.location})
			this.setState({pin7: this.props.location[6].geometry.location})
			this.setState({pin8: this.props.location[7].geometry.location})
			this.setState({pin9: this.props.location[8].geometry.location})
			this.setState({pin10: this.props.location[9].geometry.location})
		}
	}
	componentDidMount() {
		const geolocated = this.props.geolocated;
		if(geolocated){
			getLocation()
				.then(location => {
					this.setState({
						location,
						haveUsersLocation: true,
						zoom: 16
					});
					this.props.latLngCallback(location)
				});
		} 

	}

	render(){
		const position = [this.state.location.lat, this.state.location.lng];
		console.log("ma postion" ,this.props.data.latLng)
		return (
			<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
			bootstrapURLKeys={{ key:"AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I" }}
			center={position}
			zoom={this.state.zoom}
			>
			<AnyReactComponent
			lat={position.lat}
			lng={position.lng}
			/>
			<AnyReactComponent1
			lat={this.state.pin1.lat}
			lng={this.state.pin1.lng}
			/>
			<AnyReactComponent2
			lat={this.state.pin2.lat}
			lng={this.state.pin2.lng}
			/>
			<AnyReactComponent3
			lat={this.state.pin3.lat}
			lng={this.state.pin3.lng}
			/>
			<AnyReactComponent4
			lat={this.state.pin4.lat}
			lng={this.state.pin4.lng}
			/>
			<AnyReactComponent5
			lat={this.state.pin5.lat}
			lng={this.state.pin5.lng}
			/>
			<AnyReactComponent6
			lat={this.state.pin6.lat}
			lng={this.state.pin6.lng}
			/>
			<AnyReactComponent7
			lat={this.state.pin7.lat}
			lng={this.state.pin7.lng}
			/>
			<AnyReactComponent8
			lat={this.state.pin8.lat}
			lng={this.state.pin8.lng}
			/>
			<AnyReactComponent9
			lat={this.state.pin9.lat}
			lng={this.state.pin9.lng}
			/>
			<AnyReactComponent10
			lat={this.state.pin10.lat}
			lng={this.state.pin10.lng}
			/>


			{this.state.locIsReady &&
				<div>
				<AnyReactComponent1
				lat={this.state.pin.lat}
				lng={this.state.pin.lng}
				/>
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
				</div>
			}
			</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
