import React, { Component } from 'react';


class Waypoints extends Component {
    constructor(props){
        super(props)
        this.state = {
            bar: "",
        }
    }


componentDidMount() {
    fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.callback.latLng.lat},${this.props.callback.latLng.lng}&destination=${this.props.callback.latLng.lat},${this.props.callback.latLng.lng}&waypoints=optimize:true|${this.state.bar}&mode=walking&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`)
    .then(reponse => reponse.json())
    .then((data) => {this.setState({waypoints: data})})
}
componentWillMount() {
    let listBar = 0
    for (let i = 0; i < this.props.callback.nbBar; i++) {
        listBar += `${this.props.callback.bars[i].geometry.location.lat}  , ${this.props.callback.bars[i].geometry.location.long} |`
    }
    this.setState({
        bar: listBar
    })
}
componentDidUpdate() {
    console.log(this.props.callback.bars)
    console.log(this.state.bar)
    console.log(this.props.callback.latLng.lat)
}
render() {

    return (
        <div>

        </div>
    )
}
}

export default Waypoints;