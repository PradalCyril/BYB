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
        {<Range_Slider titre={"Beer Distance : "} minimum={1} maximum={15} />}
        {<Range_Slider titre={"Parcours Distance : "} minimum={2} maximum={40} />}
    </div>
)







export default Perso_box;

