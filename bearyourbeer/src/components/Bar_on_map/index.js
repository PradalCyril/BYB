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
            bar1: [],
            bar2: [],
            bar3: [],
            bar4: [],
            bar5: []
        }
    }

    render() {

        return (
            <div>
                
            </div>
        )
    }


    componentDidMount() {
        fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?location=50.467444,4.869753&radius=100&type=bar&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I'
            , {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(response => response.json())
            .then((data1) => {
                this.setState({ bar1: data1.results[0], bar2: data1.results[1], bar3: data1.results[2], bar4: data1.results[3], bar5: data1.results[4] });
            })
    }
    componentDidUpdate() {

        return this.state.bar1
        

    }
}

export default BarsOnMap;