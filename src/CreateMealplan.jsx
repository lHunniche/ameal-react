import React, {Component} from 'react';
import "./CSS/CreateMealplan.css"
import SearchButton from "./SearchButton";
import SearchField from "./SearchField";
import {searchAllRecipes, searchRecipe} from "./WebCalls";
import RecipeSelector from "./RecipeSelector";


class CreateMealplan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectedRecipes: [],
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
        // this.setState({
        //     selectedRecipes: this.state.selectedRecipes.filter((recipe) => {
        //         return keyId !== recipe.keyId;
        //     })
        // });
    };

    render() {
        return (
            <div className="root-container">
                <div className="check-mark-wrapper">
                    <img className="check_mark_icon" src={require("./CSS/images/check_mark_icon.svg")} alt=""/>
                </div>

                <SearchButton button_text="Se alle opskrifter" onClick={this.seeAllRecipes}/>
                <SearchField placeholder="Søg og vælg opskrifter..." onKey={this.handleSearch}/>
                <div className="add-remove-container">
                    <RecipeSelector selections={this.showSelectedRecipes()} type="removable" onClick={this.removeRecipe}/>
                    <RecipeSelector searchResult={this.showResult()} type="addable" onClick={this.addRecipe}/>
                </div>


            </div>
        );
    }
}

export default CreateMealplan;
