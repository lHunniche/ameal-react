import React, {Component} from 'react';
import './CSS/Ingredients.css';
import './CSS/general.css';
import ResultArea from "./ResultArea";
import {searchAllIngredients, searchIngredient} from "./WebCalls";
import SearchButton from "./SearchButton";
import SearchField from "./SearchField";


class IngredientPage extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            items: null,
        }
    }

    showResult = () => {
        return this.state.items;
    }


    handleSearch = (event, searchParam) => {
        if(event.key === 'Enter') {
            searchIngredient(searchParam, this);
        }

    }

    seeAllIngredients = () => {
        searchAllIngredients(this);
    };

    render() {
        return (
            <div className="Ingredients">
                <SearchButton button_text="Se alle ingredienser" onClick={this.seeAllIngredients}/>
                <SearchField placeholder="Søg efter ingredienser..." onKey={this.handleSearch}/>
                <ResultArea searchResult={this.showResult()} type="ingredient"/>
            </div>
        );
    }
}

export default IngredientPage;
