import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {  getLocation } from './API';
import ouvrebouteille from './ouvrebouteille2.svg';


const AnyReactComponent = ({ image }) => <div><img src={ouvrebouteille} alt="location pin" height="42" width="42" /></div>;
const AnyReactComponent1 = ({ image }) => <div>{this.state.pins[0]}</div>;
const AnyReactComponent2 = ({ image }) => <div>{this.state.pins[1]}</div>;
const AnyReactComponent3 = ({ image }) => <div>{this.state.pins[2]}</div>;
const AnyReactComponent4 = ({ image }) => <div>{this.state.pins[3]}</div>;
const AnyReactComponent5 = ({ image }) => <div>{this.state.pins[4]}</div>;
const AnyReactComponent6 = ({ image }) => <div>{this.state.pins[5]}</div>;
const AnyReactComponent7 = ({ image }) => <div>{this.state.pins[6]}</div>;
const AnyReactComponent8 = ({ image }) => <div>{this.state.pins[7]}</div>;
const AnyReactComponent9 = ({ image }) => <div>{this.state.pins[8]}</div>;
const AnyReactComponent10 = ({ image }) => <div>{this.state.pins[9]}</div>;

class SimpleMap extends Component {
	constructor(props){	
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
			zoom: 12,
			pins: [new Array(10)]
		}
	}

		componentDidMount() {
		const geolocated = props.geolocated;
		if(geolocated){
			getLocation()
				.then(location => {
					this.setState({
						location,
						haveUsersLocation: true,
						zoom: 16
					});
				});
		} 

	}
	render() {
		this.state.pins.map(pin => { return (
			<svg width="42" height="35" xmlns="http://www.w3.org/2000/svg">
                        <g>
                        <title>background</title>
                        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
                        <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
                        </g>
                        </g>
                        <g>
                        <title>Layer 1</title>
                        <defs>
                        <style>.cls-1{fill:#707070;}.cls-2{fill:none;stroke:#ffd400;stroke-miterlimit:10;stroke-width:2px;}</style>
                        </defs>
                        <path d="m270.49884,110.205498c0,1.500092 -0.054718,2.492767 -0.500031,6.000366c-0.570251,4.491905 -1.505463,9.134903 -3.500214,15.500938c-1.610291,5.139114 -2.000122,7.500458 -2.000122,8.000488l0,0.500031l0,1.000061" id="svg_31" stroke-opacity="null" stroke-width="0" stroke="#000" fill="none"/>
                        <g stroke="null" id="svg_38">
                        <g stroke="null" id="svg_36" fill="#000000" transform="matrix(0.04863362245160378,0,0,-0.03910566381637382,-1744.6474878627478,-403.10109946368186) ">
                        <path stroke="null" fill="#da2627" id="svg_37" d="m41681.165396,-10539.970599c-276,-28 -392,-47 -590,-99c-853,-222 -1563,-798 -1958,-1590c-299,-600 -385,-1335 -232,-1975c76,-316 165,-524 413,-970c269,-484 315,-559 787,-1285c111,-170 256,-395 322,-500c768,-1214 1218,-2270 1474,-3459c15,-68 18,-62 44,64c104,524 325,1206 568,1755c302,682 612,1227 1260,2214c450,688 566,882 791,1331c253,502 304,636 370,960c69,340 65,774 -10,1150c-115,575 -417,1120 -860,1551c-471,457 -1078,743 -1774,834c-118,15 -516,28 -605,19z"/>
                        </g>
                        </g>
                        <text stroke="#000" transform="matrix(13.433609008789062,0,0,10.528879165649412,-2937.271930456162,-680.633221387863) " xml:space="preserve" text-anchor="start" font-family="Georgia, Times, 'Times New Roman', serif" font-size="24" id="svg_43" y="85.15089" x="234.182731" stroke-opacity="null" stroke-width="0" fill="#ffffff">{index}</text>
                        <defs>
                        <style>.cls-1{fill:#da2627;}.cls-2{fill:#fff;}</style>
                        </defs>
                        </g>
                        </svg>
		)}
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
			lat={this.state.location.lat}
			lng={this.state.location.lng}
			>
			/*	<AnyReactComponent2
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
			/> */
			</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
