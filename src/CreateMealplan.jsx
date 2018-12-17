import React, {Component} from 'react';
import "./CSS/CreateMealplan.css"
import SearchField from "./SearchField";
import {searchAllRecipes, searchRecipe} from "./WebCalls";
import RecipeSelector from "./RecipeSelector";
import SearchButton from "./SearchButton";
import CreateMealplanPopup from "./CreateMealplanPopup";


class CreateMealplan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedRecipes: [],
            popupActive: false,
        }
    }


    handleSearch = (event, searchParam) => {
        if (event.key === 'Enter') {
            searchRecipe(searchParam, this);
        }
    };

    seeAllRecipes = () => {
        searchAllRecipes(this);
    };

    showResult = () => {
        return this.state.items;
    };

    showSelectedRecipes = () => {
        return this.state.selectedRecipes;

    };

    addRecipe = (props) => {
        let updatedList = this.state.selectedRecipes;
        updatedList.push(props);
        this.setState({
            selectedRecipes: updatedList,
        });
    };

    removeRecipe = (keyId) => {
        let updatedList = this.state.selectedRecipes;
        updatedList.splice(keyId, 1);
        this.setState({
            selectedRecipes: updatedList,
        });
    };

    handleCreateClick = () => {
        this.setState({
            popupActive: true,
        })
    };

    removePopup = () => {
        this.setState({
            popupActive: false,
        });
    };

    getIsPopupActive = () => {
        return this.state.popupActive;
    };

    removePopupWithEscape = (event) => {
        if (event.keyCode === 27) {
            this.setState({
                popupActive: false,
            })
        }
    };

    render() {
        return (
            <div className="root-container">
                <div className="search-container">
                    <SearchField placeholder="Søg og vælg opskrifter..." onKey={this.handleSearch}/>
                    <SearchButton button_text="Se alle opskrifter" onClick={this.seeAllRecipes}/>
                    <img className="check_mark_icon" src={require("./CSS/images/check_mark_icon.svg")} alt="" onClick={this.handleCreateClick}/>
                </div>

                <div className="add-remove-container">
                    <RecipeSelector selections={this.showSelectedRecipes()} type="removable" onClick={this.removeRecipe}/>
                    <RecipeSelector searchResult={this.showResult()} type="addable" onClick={this.addRecipe}/>
                </div>
                <CreateMealplanPopup popupActive={this.getIsPopupActive()} recipes={this.state.selectedRecipes} removePopupWithEscape={this.removePopupWithEscape} removePopup={this.removePopup    }/>
            </div>
        );
    }
}

export default CreateMealplan;
