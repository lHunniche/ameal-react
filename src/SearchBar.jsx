import React, {Component} from 'react';
import './CSS/SearchBar.css';


class SearchBar extends Component {
    render() {
        return (
            <div className="searchContainer">
                <input type="text" placeholder="Søg efter ingredienser..." id="searchBar" />
            </div>
        );
    }
}

export default SearchBar;
