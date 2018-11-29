import React, { Component } from 'react';


class Waypoints extends Component {
    constructor(props){
        super(props)
        this.state = {
            waypoints:[],
            bar: "",
            nbBar: 3,
            dataBars: []
        }
    }


componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${},${}&destination=${},${}&waypoints=optimize:true|${this.state.bar}&mode=walking&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`)
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