import React from "react";
import "./ListBar.css"
import ItemBar from "./ItemBar/ItemBar";

fetch('{ "https://randomuser.me/api?nat=fr')
    .then(results  =>  results.json()) // conversion du résultat en JSON
    .then(data  => {
        console.log("hello"); // affiche "John Smith"
});





const bars = [
  {
    title:"Test 1",
    adress: "5000 Namur",
    photo:"https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg",
    description: "Bar avec plus de 2000 bières. Concert le jeudi soir et objets déco sur l'univers de la brasserie.",
    note: "7,4"
  },
  {
    title:"Test 2",
    adress: "7510 bx",
    photo:"https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg",
    description: "Bar avec plus de 2000 bières. Concert le jeudi soir et objets déco sur l'univers de la brasserie.",
    note: "7,4"
  },
  {
    title:"Test 3",
    adress: "5040 Paris",
    photo:"https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg",
    description: "Bar avec plus de 2000 bières. Concert le jeudi soir et objets déco sur l'univers de la brasserie.",
    note: "7,4"
  },
  {
    title:"Test 4",
    adress: "54556 Londre",
    photo:"https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg",
    description: "Bar avec plus de 2000 bières. Concert le jeudi soir et objets déco sur l'univers de la brasserie.",
    note: "7,4"
  }
];


class ListBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
      bar:  bars
    };
  }

  render() {
    return (
      <div>
    {bars.map((propri, index) => (
      <ItemBar key={index} title={propri.title} photo={propri.photo} adress={propri.adress} description={propri.description} note={propri.note}  />
    ))}
    </div>
);

export default ListBar;