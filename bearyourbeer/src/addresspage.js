import React, { Component } from 'react';
import RangeSlider from './components/Personalised_box/RangeSlider';
import ListBar from './components/ListBar/ListBar'
import SimpleMap from './components/map/SimpleMap';
import Waypoints from './components/waypoints/index';

let userRadius = 1000;


class Addresspage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			waypointsReady: false
		}
	}
	componentDidUpdate(prevProps) {

		if (prevProps.data.beerDistance !== this.props.data.beerDistance) {
			userRadius = this.props.data.beerDistance * 1000

		}

		if (prevProps.data.bars !== this.props.data.bars && this.props.data.bars.length > 0) {
			this.setState({
				waypointsReady: true
			})
		}
		if (prevProps.data.latLng !== this.props.data.latLng) {

			console.log(this.props.data.latLng, "coucou")
			fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${this.props.data.latLng.lat},${this.props.data.latLng.lng}&radius=${userRadius}&type=bar&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`
				, {
					headers: {
						'Access-Control-Allow-Origin': '*',
					}
				})
				.then(response => {
					console.log(response.error, "error")
					return response.json()})
				.then((data) => {
					console.log(data.results, "salut")
					this.props.getBars(data.results)
				})
			.catch((error) => {
				console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
			});

		}
	}
	componentDidMount(prevProps) {
	if (prevProps.data.latLng !== this.props.data.latLng) {
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
	}


	render() {
		return (

			<div>

			<RangeSlider
			latLngCallback={(data) => this.props.latLngCallback(data)}
			sliderCallback={(dataType, data) => this.props.sliderCallback(dataType, data)}
			/>
			<SimpleMap location={this.props.location} />
			{this.state.waypointsReady &&
				<Waypoints data={this.props.data} goUpTrajet={(data) => this.props.goUpTrajet(data)} />
			}
			<ListBar />
			</div>
		);
	}
}

export default Addresspage;
