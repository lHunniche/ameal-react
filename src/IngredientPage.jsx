import React, {Component} from 'react';
import './CSS/Ingredients.css';
import './CSS/general.css';
import ResultArea from "./ResultArea";
import {searchIngredient} from "./WebCalls";


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


    handleSearch = (event) => {
        if(event.key === 'Enter') {
            searchIngredient(this.refs.searchBar.value, this);
        }

    }

    render() {
        return (
            <div className="Ingredients">
                <div className="searchContainer">
                    <input ref="searchBar" type="text" placeholder="Søg efter ingredienser..." onKeyPress={this.handleSearch}/>
                </div>
                <ResultArea searchResult={this.showResult()} type="ingredient"/>
            </div>
        );
    }
}

export default IngredientPage;
