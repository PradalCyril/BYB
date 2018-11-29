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

        }
    }

    render() {

        return (
            <React.Fragment>
            </React.Fragment>
        )
    }


    componentDidMount() {
        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${this.props.userLatLng.lat},${this.props.userLatLng.lng}&radius=${this.props.userdistance}&type=bar&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(response => response.json())
            .then((data1) => {
                this.props.getBars(data1.results)
            });

    }
}


export default BarsOnMap;