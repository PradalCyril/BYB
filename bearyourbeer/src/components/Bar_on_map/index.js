import React, { Component } from 'react';

class BarsOnMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                lat: '50.8475967',
                lng: '4.3586516'
            },
            userdistance: '1000',
            geometry: {}
        }
    }

    render() {
        console.log(this.state.geometry)
        return (

            <div>
                <button onClick={() => this.getBars}></button>


            </div>
        )
    }
    getBars() {
        fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=50.8475967,4.3586516&radius=1000&type=bar&rankby&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    geometry: data.results
                });
            }
            )

    }
}

export default BarsOnMap;