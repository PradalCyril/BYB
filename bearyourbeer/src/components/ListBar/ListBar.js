import React, { Component } from 'react';
import './ListBar.css';
import ItemBar from './ItemBar/ItemBar'

class ListBar extends Component {
    render() {
        return (
            <div className="container list-bar-container">
                <div>
                    <span>We found 6 bars you could be interested in</span>
                </div>
                
                <div>
                    <ul className="ub-list-bar">
                        <ItemBar />
                    </ul>
                </div>
            </div>
        )
    }
}


export default ListBar ;