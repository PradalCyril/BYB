import React, { Component } from 'react';
import './Range_slider.css';

class Range_slider extends Component {
    constructor(props){
        

    }

    render() {
        return (
            <div>
                <ul className="global" onInput={(ev) => this.sliderValue(ev)}>
                    <li className="li-titre">{this.props.titre}</li>
                    <li className="li-slider">
                        <ul className="range-slider">
                        <li className="li-output">
                            <output ref={(el) => { this._result = el }} id="result">{this.props.minimum}</output>
                            </li>
                            <li className="li-input">
                                <input type="range" defaultValue={this.props.minimum} min={this.props.minimum} max={this.props.maximum} className="slider-range">
                                </input>
                            </li>
                            <li className="min-max-slider">
                                <span className="range-slider__value">{this.props.minimum}</span>
                                
                                <span className="range-slider__value">{this.props.maximum}</span>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }

    sliderValue(ev) {
        this._result.value = ev.target.value;
        let difference=this.props.maximum-this.props.minimum 
        let moinsdifference=0-this.props.minimum
        let nbPixels=100/difference
        this._result.style.left = (parseInt(ev.target.value)+moinsdifference)*nbPixels + '%';
        
    }

}

export default Range_slider;