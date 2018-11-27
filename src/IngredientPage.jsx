import React, {Component} from 'react';
import './CSS/Ingredients.css';
import './CSS/general.css';
import ResultArea from "./ResultArea";


class IngredientPage extends Component {
    constructor(probs) {
        super(probs);
        this.state = {items: null}
    }


    handleSearch = (event) => {
        if(event.key !== 'Enter') {
            return;
        }
        let rootUrl = "https://ameal.io:8080/";
        let token = "TOKEN@1";
        let searchParam = this.refs.searchBar.value;
        let url = rootUrl + "ingredients/byName/" + searchParam + "?applicationToken=" + token;
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                    console.log(this.state.items);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div className="Ingredients">
                <div className="searchContainer">
                    <input ref="searchBar" type="text" placeholder="Søg efter ingredienser..." onKeyPress={this.handleSearch}/>
                </div>
                <ResultArea/>
            </div>
        );
    }
}

export default IngredientPage;
