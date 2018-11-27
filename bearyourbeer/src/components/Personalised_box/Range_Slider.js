import React, { Component } from 'react';
import './Range_slider.css';

import SearchBox from '../SearchBox/SearchBox'


class Range_slider extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <React.Fragment>
                <div className="perso-box">
                    <div>
                        <ul className="global" onInput={(ev) => this.sliderValue1(ev)}>
                            <li className="li-titre" id="titre">Beer Distance (km)</li>
                            <li className="li-slider">
                                <ul className="range-slider">
                                    <li className="li-output">
                                        <output ref={(el) => { this._result1 = el }} id="result1">{1}</output>
                                    </li>
                                    <li className="li-input">
                                        <input type="range" ref={(el) => { this._inpout1 = el }} id="inpout1" defaultValue={1} min={1} max={15} className="slider-range" >
                                        </input>
                                    </li>
                                    <li className="min-max-slider">
                                        <span className="range-slider__value">{1}</span>

                                        <span className="range-slider__value">{15}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="global" onInput={(ev) => this.sliderValue2(ev)}>
                            <li className="li-titre" id="titre">Distance from the course : (km)</li>
                            <li className="li-slider">
                                <ul className="range-slider">
                                    <li className="li-output">
                                        <output ref={(el) => { this._result2 = el }} id="result2">{2}</output>
                                    </li>
                                    <li className="li-input">
                                        <input type="range" ref={(el) => { this._inpout2 = el }} id="inpout2" defaultValue={2} min={2} max={10} className="slider-range" >
                                        </input>
                                    </li>
                                    <li className="min-max-slider">
                                        <span className="range-slider__value">{2}</span>

                                        <span className="range-slider__value">{10}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="global" onInput={(ev) => this.sliderValue3(ev)}>
                            <li className="li-titre" id="titre">Nomber of Bars :</li>
                            <li className="li-slider">
                                <ul className="range-slider">
                                    <li className="li-output">
                                        <output ref={(el) => { this._result3 = el }} id="result3">{3}</output>
                                    </li>
                                    <li className="li-input">
                                        <input type="range" ref={(el) => { this._inpout3 = el }} id="inpout3" defaultValue={3} min={3} max={10} className="slider-range" >
                                        </input>
                                    </li>
                                    <li className="min-max-slider">
                                        <span className="range-slider__value">{3}</span>

                                        <span className="range-slider__value">{10}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="search-box">
                    <SearchBox />
                </div>

            </React.Fragment>
        )
    }

    sliderValue1(ev) {
        this.props.onChangeValue1(ev.target.value)
        this._result1.value = ev.target.value;
        this.setState({ beerDistance: ev.target.value })
        let difference = this._inpout1.max - this._inpout1.min
        let moinsdifference = 0 - this._inpout1.min
        let nbPixels = 100 / difference
        this._result1.style.left = (parseInt(ev.target.value) + moinsdifference) * nbPixels + 4 + '%';


    }
    sliderValue2(ev) {
        this.props.onChangeValue2(ev.target.value)
        this._result2.value = ev.target.value;
        this.setState({ distance: ev.target.value })
        let difference = this._inpout2.max - this._inpout2.min
        let moinsdifference = 0 - this._inpout2.min
        let nbPixels = 100 / difference
        this._result2.style.left = (parseInt(ev.target.value) + moinsdifference) * nbPixels + 4 + '%';

    }
    sliderValue3(ev) {
        this.props.onChangeValue3(ev.target.value)
        this._result3.value = ev.target.value;
        this.setState({ nbBar: ev.target.value })
        let difference = this._inpout3.max - this._inpout3.min
        let moinsdifference = 0 - this._inpout3.min
        let nbPixels = 100 / difference
        this._result3.style.left = (parseInt(ev.target.value) + moinsdifference) * nbPixels + 4 + '%';


    }

}

export default Range_slider;