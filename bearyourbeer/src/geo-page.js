import React, { Component } from 'react';
import SimpleMap from './components/geomap/SimpleMap';
class Geo-page extends Component {
	super(props)
    render() {
        return (
            <div>
		<SimpleMap location={this.props.location} />
            </div>
        );
    }
}

export default Geo_page;
