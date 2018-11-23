import React, { Component } from 'react';
import './FirstPage.css';
import Bubles from './bubles'
import SearchBox from '../SearchBox/SearchBox';
import { DataConsumer } from '../ContextApi/DataContext';



class FirstPage extends Component {

    componentDidMount(){
        Bubles.init(this.canvas);
        }

    render() {
        return (
            <div className="relative">
                 <canvas ref={(el) => { this.canvas = el }} className="canvas"></canvas>

            <div className="container_first-page">
                <div className="shape-bg">
                    <svg viewBox="0 0 1366.05 240.8"><defs><linearGradient id="a" x1="921.97" y1="228.9" x2="1353.24" y2="30.11" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f94355" /><stop offset=".99" stopColor="#da2627" /></linearGradient><linearGradient id="b" x1="158.38" y1="7.11" x2="842.34" y2="276.05"  href="#a" /></defs><g data-name="Calque 2"><g data-name="Calque 1"><path d="M338.91 3.26C399 16.28 505.28 61.38 544 81.4c75.63 39.08 119.23 79.34 197.88 114a552.17 552.17 0 0 0 59.87 22.29c73.4 2.72 175.3-10.92 261.81-45.63 13.85-5.55 23.44-10.1 34.19-15.19C1160.31 127.21 1240.16 79.51 1325 0H288.14c10.72 0 34.55-.26 50.77 3.26z" fill="#da2627" /><path d="M1310.81 0c-81.89 73.26-159 117.2-219.31 144.5-10.37 4.69-19.63 8.88-33 14-83.5 32-181.86 44.54-252.71 42 25.69 7.57 34.62 18.71 58.21 22.46 19.07 3 53 6.78 70 8 75.22 5.42 127-11.45 127-9 0 .29-.83.74-2.41 1.33 56.52-14.68 158.17-46.74 307.41-117.29.16-35.67-.16-70.33 0-106z" fill="url(#a)" /><path d="M805.79 200.54A550.73 550.73 0 0 1 748 180c-75.92-31.9-118-69-191-105-37.41-18.45-140-60-198-72-15.65-3.24-38.66-3-49-3H0v85c31.49 2.07 151.29-9.49 293.39 2 65.29 5.28 135.29 15.43 203.61 34 107.89 29.33 135.47 49.71 216 84 58.06 24.72 121.45 33.92 178 35.53a690.57 690.57 0 0 0 125-7.93c18.81-3.87 33.09-6.81 40-8.6l2.59-.67c1.58-.59 2.41-1 2.41-1.33 0-3.69-116.72 19.34-255.21-21.46z" fill="url(#b)" /></g></g></svg>
                </div>

                <div className="container">
                    <div className="content-container">
                        <h1 className="site-title">
                            Bear your Beer
                        </h1>


                        <p className="welcome_txt">
                            And you ! It seems that you have a little thirst? Let yourself be guided by <span className="font_titre">Bear your Beer </span>and make a personalized journey to discover the best bars nearby.
                        </p>

                        <p className="welcome_txt">
                            Where do you start?
                          
                        </p>
                        <DataConsumer >
                            {context => <p>{context.lat}</p>}
                        </DataConsumer>
                    </div>

                        {/* _________Bouton "Geo-Localise moi"_________ */}
                        <div className="btn_geoloc_content">
                            <a className="btn_geoloc button" href="./component/page.html">Geo-Localize me !</a>

                            <p className="or">Or</p>


                            {/* _________Bouton "entrer adresse"_________ */}
                            <form className="localise-form" method="post">
                                
                                    
                            <SearchBox callback={(data) => this.props.callback(data)}/>
                                
                                <a className="bouton_go button" href="./component/page.html">Go</a>
                                
                            </form>
                        </div>
                </div>
            </div>
        </div>
        )
    }
}


export default FirstPage;