import React, { Component } from 'react';
import SimpleMap from './components/addressmap/SimpleMap';
class Address-page extends Component {
        super(props)
    render() {
        return (
            <div>
                <SimpleMap location={this.props.location} addressloc={this.props.data}/>
            </div>
        );
    }
}

export default Address-page;

