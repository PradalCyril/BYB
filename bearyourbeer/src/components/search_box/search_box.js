import React, { Component } from 'react';
import './search_box.css';



class Search_box extends Component {
    render() {
        return (

            <div>
                        <form method="post" action="traitement.php">
                            <p>
                                <label className="font_txt" for="adresse"></label><input className="custom_input" placeholder="I choose the address of the tour" type="text" name="address" id="address" />
                            </p>
                        </form>
                 
            </div>

        )
    }
}


export default Search_box;