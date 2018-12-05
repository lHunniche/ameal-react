import React, {Component} from 'react';
import './CSS/Recipes.css';
import './CSS/general.css';
import ResultArea from "./ResultArea";
import {searchRecipe} from "./WebCalls";


class RecipePage extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            items: null,
        }
    }

    showResult = () => {
        return this.state.items;
    };


    handleSearch = (event) => {
        if (event.key === 'Enter') {
            searchRecipe(this.refs.searchBar.value, this);
        }
    };

    render() {
        return (
            <div className="Recipes">
                <div className="searchContainer">
                    <input ref="searchBar" type="text" placeholder="Søg efter opskrifter..." onKeyPress={this.handleSearch}/>
                </div>
                <ResultArea searchResult={this.showResult()} type="recipes"/>
            </div>
        );
    }
}

export default RecipePage;
