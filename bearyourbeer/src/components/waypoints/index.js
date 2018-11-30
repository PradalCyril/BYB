import React, { Component } from 'react';


class Waypoints extends Component {
    constructor(props){
        super(props)
        this.state = {
            bar: "",
        }
    }


componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.data.latLng.lat},${this.props.data.latLng.lng}&destination=${this.props.data.latLng.lat},${this.props.data.latLng.lng}&waypoints=optimize:true|${this.state.bar}&mode=walking&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`)
    .then(reponse => reponse.json())
    .then((data) => {this.setState({waypoints: data})})
}
componentWillMount() {
    let listBar = 0
    
    for (let i = 0; i < this.props.data.nbBar; i++) {
        //listBar += `${this.props.data.bars[i].geometry.location.lat}  , ${this.props.data.bars[i].geometry.location.long} |`
    }
    this.setState({
        bar: listBar
    })
}
componentDidUpdate() {
    console.log("liste des bars : "+ this.props.data[0])
    console.log("list bar dans le state de waypoint : "+this.state.bar)
    console.log("user position "+ this.props.data.latLng.lat)
}
render() {

    return (
        <div>

        </div>
    )
}
}

export default Waypoints;