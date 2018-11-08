import React, { Component } from 'react';
import './listeDeroulante.css';


const ListeDeroulante = props => (
            <label>
                {props.titre} : 
                <span className="custom-dropdown custom-dropdown--white">
                    <select className="custom-dropdown__select custom-dropdown__select--white">
                        <option>{props.lesOptions}</option>
                        
                    </select>
                </span>
            </label>
  );
export default ListeDeroulante;