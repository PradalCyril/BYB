import React, { Component } from 'react';
import SimpleMap from './components/Geomap/SimpleMap';
class Geopage extends Component {
	super(props)
    render() {
        return (
            <div>
		<SimpleMap location={this.props.location} />
            </div>
        );
    }
}

export default Geopage;
