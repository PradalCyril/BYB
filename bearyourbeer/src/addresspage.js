import React, { Component } from 'react';
import SimpleMap from './components/Addressmap/SimpleMap';
class Addresspage extends Component {
        super(props)
    render() {
        return (
            <div>
                <SimpleMap location={this.props.location} addressloc={this.props.data}/>
            </div>
        );
    }
}

export default Addresspage;

