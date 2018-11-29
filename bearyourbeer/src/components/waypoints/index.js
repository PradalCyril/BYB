import React, { Component } from 'react';


class Waypoints extends Component {
    constructor(props){
        super(props)
        this.state = {
            waypoints:[],
            bar: "",
            nbBar: 3,
            dataBars: [{
                geometry: {
                    location: {
                        lat: 50.8469892,
                        long: 4.35323870000002
                    }
                }
            }, {
                geometry: {
                    location: {
                        lat: 50.8484223,
                        long: 4.351250599999958
                    }
                }
            }, {
                geometry: {
                    location: {
                        lat: 50.8484703,
                        long: 4.353890500000034
                    }
                }
            }

            ]
        }
    }


componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=50.8478332,4.3601075000000264&destination=50.8478332,4.3601075000000264&waypoints=optimize:true|${this.state.bar}&mode=walking&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`)
    .then(reponse => reponse.json())
    .then((data) => {this.setState({waypoints: data})})
}
componentWillMount() {
    let listBar = 0
    for (let i = 0; i < this.state.nbBar; i++) {
        listBar += `${this.state.dataBars[i].geometry.location.lat}  , ${this.state.dataBars[i].geometry.location.long} |`
    }
    this.setState({
        bar: listBar
    })
}
componentDidUpdate() {
    console.log(this.state.bar)
    console.log(this.state.waypoints)
}
render() {

    return (
        <div>

        </div>
    )
}
}

export default Waypoints;