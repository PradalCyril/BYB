import React from 'react';
import './Perso_box.css';

import ListeDeroulante from "./ListeDeroulante";
import Range_Slider from "./Range_Slider";

const nombreBars = {
    titre: "Numbers of Bar",
    lesOptions: ["3", "4", "5", "6", "7", "8", "9", "10"]
}

const Perso_box = () => (
    <div>
        <div className="perso-box">
            {<Range_Slider titre={"Beer Distance : "} minimum={1} maximum={15} />}
            {<Range_Slider titre={"Parcours Distance : "} minimum={2} maximum={40} />}
            {<Range_Slider titre={"Nombres de Bars : "} minimum={3} maximum={10} />}
        </div>
        <div className="search-box">
            <input type="text"></input>
        </div>
    </div>
)







export default Perso_box;

