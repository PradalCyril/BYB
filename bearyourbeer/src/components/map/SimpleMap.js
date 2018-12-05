import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {  getLocation } from './API';
import ouvrebouteille from './ouvrebouteille2.svg';
import './map.css';

const AnyReactComponent = () => <div><img src={ouvrebouteille} alt="location pin" height="42" width="42" /></div>;

class SimpleMap extends Component {
	constructor(props){	
		super(props)
		this.state = {
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
			pins: [new Array(10)],
			createPins: false,
			locIsReady: false
		}
	}
	componentDidUpdate(prevProps) {
		if (prevProps.data.bars !== this.props.data.bars) {
			this.setState({locIsReady: true})
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

	componentWillMount() {
		if(this.state.createPins === false){
			for(let i = 1; i < 11; i++){
				this.state.pins.push(`<svg width="420" height="350" viewBox="0 0 3500 3500" xmlns="http://www.w3.org/2000/svg"><defs><style></style></defs><path d="M270.499 110.205c0 1.5-.055 2.493-.5 6-.57 4.493-1.506 9.136-3.5 15.502-1.61 5.139-2 7.5-2 8v1.5" id="svg_31" stroke-opacity="null" stroke-width="0" stroke="#000" fill="none"/><g stroke="null" id="svg_38"><g id="svg_36" transform="matrix(.04863 0 0 -.0391 -1744.647 -403.101)"><path fill="#da2627" id="svg_37" d="M41681.165-10539.97c-276-28-392-47-590-99-853-222-1563-798-1958-1590-299-600-385-1335-232-1975 76-316 165-524 413-970 269-484 315-559 787-1285 111-170 256-395 322-500 768-1214 1218-2270 1474-3459 15-68 18-62 44 64 104 524 325 1206 568 1755 302 682 612 1227 1260 2214 450 688 566 882 791 1331 253 502 304 636 370 960 69 340 65 774-10 1150-115 575-417 1120-860 1551-471 457-1078 743-1774 834-118 15-516 28-605 19z"/></g></g><text stroke="#000" transform="matrix(13.4336 0 0 10.52888 -2937.272 -680.633)" font-family="Georgia, Times, 'Times New Roman', serif" font-size="24" id="svg_43" y="85.151" x="234.183" stroke-opacity="null" stroke-width="0" fill="#fff">` + i + `</text><defs><style></style></defs></svg>`
				)}
			this.setState({ createPins: true})
		}
	}
	render(){
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
			{this.state.locIsReady &&
				<React.Fragment>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[0]
				}}
				lat={this.props.data.bars[0].geometry.location.lat}
				lng={this.props.data.bars[0].geometry.location.lng}
				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[1]
				}}
				lat={this.props.data.bars[1].geometry.location.lat}
				lng={this.props.data.bars[1].geometry.location.lng}

				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[2]
				}}
				lat={this.props.data.bars[2].geometry.location.lat}
				lng={this.props.data.bars[2].geometry.location.lng}

				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[3]
				}}
				lat={this.props.data.bars[3].geometry.location.lat}
				lng={this.props.data.bars[3].geometry.location.lng}

				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[4]
				}}
				lat={this.props.data.bars[4].geometry.location.lat}
				lng={this.props.data.bars[4].geometry.location.lng}

				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[5]
				}}
				lat={this.props.data.bars[5].geometry.location.lat}
				lng={this.props.data.bars[5].geometry.location.lng}

				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[6]
				}}
				lat={this.props.data.bars[6].geometry.location.lat}
				lng={this.props.data.bars[6].geometry.location.lng}

				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[7]
				}}
				lat={this.props.data.bars[7].geometry.location.lat}
				lng={this.props.data.bars[7].geometry.location.lng}

				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[8]
				}}
				lat={this.props.data.bars[8].geometry.location.lat}
				lng={this.props.data.bars[8].geometry.location.lng}

				/>
				<p dangerouslySetInnerHTML={{
					__html: this.state.pins[9]
				}}
				lat={this.props.data.bars[9].geometry.location.lat}
				lng={this.props.data.bars[9].geometry.location.lng}
				/>
				</React.Fragment>
			}
			</GoogleMapReact>
			</div>
		);
	}
}

export default SimpleMap;
