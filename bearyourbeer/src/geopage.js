import React, { Component } from 'react';
import RangeSlider from './components/Personalised_box/RangeSlider';
import ListBar from './components/ListBar/ListBar'
import SimpleMap from './components/map/SimpleMap';
import Waypoints from './components/waypoints/index';
import './geopage.css';

let userRadius = 1000;


class Geopage extends Component {

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
<svg className="background-map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1281 475.07"><defs><linearGradient id="a" x1="747.39" y1="806.05" x2="1470.76" y2="806.05" gradientTransform="rotate(-135 577.668 685.357)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#da2627"/><stop offset="1" stop-color="#f94355"/></linearGradient><linearGradient id="b" x1="309.33" y1="242.36" x2="1281" y2="242.36" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f94355"/><stop offset=".99" stop-color="#da2627"/></linearGradient></defs><g data-name="Calque 2"><g data-name="Calque 1"><path d="M254.73 0H0v255c122.94 106.5 224.6 165.33 308.33 194.79 101.11 10.3 177.5 6.76 230.17-18.29 110.07-52.35 173.71-121.6 304-220C1007 87.26 1149.5 71.5 1280 9.65V0z" fill="#da2627"/><path d="M543 409C237 440 74.4 95.85 0 0c1 110 0 150 0 255 101.2 83.61 168 145 318 198l113 10 135-49 136-93s-82.91 80.29-159 88z" fill="url(#a)"/><path d="M534.5 413.5c-52.67 25.05-124.06 46.59-225.17 36.29C400.83 482 470.93 479.1 524 465c109.11-29 145-105 281-175 175.53-90.36 355.62-87.17 476-72V9.65C1150.32 22.08 963 56.26 798.5 180.5c-130.29 98.4-153.93 180.65-264 233z" fill="url(#b)"/></g></g></svg>
                <div className="map-container">
                <h1 className="title-slider-h1">Bear your beer</h1>
                <RangeSlider
                    latLngCallback={(data) => this.props.latLngCallback(data)}
                    sliderCallback={(dataType, data) => this.props.sliderCallback(dataType, data)}
                />
                {this.state.waypointsReady &&
                    <Waypoints data={this.props.data} goUpTrajet={(data) => this.props.goUpTrajet(data)} />
                }
                <SimpleMap location={this.props.location} data={this.props.data} latLngCallback={(data) => this.props.latLngCallback(data)}/>
                </div>
                <ListBar data={this.props.data}/>
            </div>
        );
    }
}

export default Geopage
