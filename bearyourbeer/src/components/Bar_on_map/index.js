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
                this.props.getBar1(data1.results[0]),
                this.props.getBar2(data1.results[1]),
                this.props.getBar3(data1.results[2]),
                this.props.getBar4(data1.results[3]),
                this.props.getBar5(data1.results[4]),
                this.props.getBar6(data1.results[5]),
                this.props.getBar7(data1.results[6]),
                this.props.getBar8(data1.results[7]),
                this.props.getBar9(data1.results[8]),
                this.props.getBar10(data1.results[9])

            });
    
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