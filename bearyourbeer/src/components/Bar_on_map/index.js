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
        fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?location=${this.state.user.lat},${this.state.user.lng}&radius=${this.state.userdistance}&type=bar&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`
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
        console.log(this.state.user.lat)
        console.log(this.state.userdistance)
            console.log(this.state.bar2.geometry.location)
            console.log(this.state.bar3.geometry.location)
            console.log(this.state.bar4.geometry.location)
            console.log(this.state.bar5.geometry.location)
        
        

    }
}


export default BarsOnMap;