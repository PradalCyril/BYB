import React, { Component } from 'react';


class Waypoints extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bar: "",
        }
    }


    componentDidMount() {


        fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.data.latLng.lat},${this.props.data.latLng.lng}&destination=${this.props.data.latLng.lat},${this.props.data.latLng.lng}&waypoints=optimize:true|${this.state.bar}&mode=walking&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`)
            .then(reponse => reponse.json())
            .then((data) => { this.props.goUpTrajet(data)  })
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.data.nbBar !== this.props.data.nbBar) {
            let listBar = 0
            console.log(this.props.data.nbBar+ " " +this.props.data.bars)
            for (let i = 0; i < this.props.data.nbBar; i++) {
                listBar += `${this.props.data.bars[i].geometry.location.lat}  , ${this.props.data.bars[i].geometry.location.lng} |`
            }
            listBar = listBar.substring(0, listBar.length - 1);
            this.setState({
                bar: listBar
            })

            fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${this.props.data.latLng.lat},${this.props.data.latLng.lng}&destination=${this.props.data.latLng.lat},${this.props.data.latLng.lng}&waypoints=optimize:true|${this.state.bar}&mode=walking&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`)
            .then(reponse => reponse.json())
            .then((data) => { this.props.goUpTrajet(data)  })
        }
    }


    render() {

        return (
            <div>
            </div>
        )
    }
}

export default Waypoints;