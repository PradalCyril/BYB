import React from "react";
import './ItemBar.css';

const ItemBar = ({photo, title, adress, description, note}) => (
            <li className="item-bar">
                <div className="item-bar-container">
                    <div className="img-bar-container">
                        <img className="img-bar" src={photo} alt={title} />
                    </div>
                    <div className="text-bar-container">
                        <h3 className="title-bar">{title}<span className="point-bar">{note}</span></h3>
                        <p className="adresse-bar">{adress}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </li>
        );

export default ItemBar;