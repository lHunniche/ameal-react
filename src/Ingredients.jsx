import React, {Component} from 'react';
import './CSS/Ingredients.css';
import SearchBar from "./SearchBar";


class Ingredients extends Component {
    render() {
        return (
            <div className="Ingredients">
                    <SearchBar/>
            </div>
        );
    }
}

export default Ingredients;
