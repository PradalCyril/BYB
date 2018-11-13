import React, { Component } from 'react';
import './ItemBar.css';


class ItemBar extends Component {
    render() {
        return (
            <li className="item-bar">
                <div className="item-bar-container">
                    <div className="img-bar-container">
                        <img className="img-bar" src={ require('../images/bar.jpg') } />
                    </div>
                    <div className="text-bar-container">
                        <h3 className="title-bar">Les champs Elysée</h3>
                        <p className="adresse-bar">1000 Paris</p>
                        <p>Bar avec plus de 2000 bières. Concert le jeudi soir et objets déco sur l'univers de la brasserie.
                            
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}


export default ItemBar;