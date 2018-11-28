import React, {Component} from 'react';


class Waypoints extends Component {
   
    componentDidMount (){
        fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${userposition.lat},${userposition.long}&destination=${userposition.lat},${userposition.long}&waypoints=optimize:true|${bar1|bar2|bar3|bar4|bar5|bar6|bar7|bar8|bar9|bar10}&mode=walking&key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I`)
    }

    render (){

        const bar1= this.props.dataBars[0].geometry.location
        const bar2= this.props.dataBars[1].geometry.location
        const bar3= this.props.dataBars[2].geometry.location
        const bar4= this.props.dataBars[3].geometry.location
        const bar5= this.props.dataBars[4].geometry.location
        const bar6= this.props.dataBars[5].geometry.location
        const bar7= this.props.dataBars[6].geometry.location
        const bar8= this.props.dataBars[7].geometry.location
        const bar9= this.props.dataBars[8].geometry.location
        const bar10= this.props.dataBars[9].geometry.location

        return(
            <div>

            </div>
        )
    }
}

export default Waypoints;