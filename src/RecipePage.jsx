import React, {Component} from 'react';
import './CSS/Recipes.css';
import './CSS/general.css';
import ResultArea from "./ResultArea";
import {searchAllRecipes, searchRecipe} from "./WebCalls";
import SearchButton from "./SearchButton";
import SearchField from "./SearchField";


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


    handleSearch = (event, searchParam) => {
        if (event.key === 'Enter') {
            searchRecipe(searchParam, this);
        }
    };

    seeAllRecipes = () => {
        searchAllRecipes(this);
    };

    render() {
        return (
            <div className="Recipes">
                <SearchButton button_text="Se alle opskrifter" onClick={this.seeAllRecipes}/>
                <SearchField placeholder="Søg efter opskrifter..." onKey={this.handleSearch}/>
                <ResultArea searchResult={this.showResult()} type="recipes"/>
            </div>
        );
    }
}

export default RecipePage;
