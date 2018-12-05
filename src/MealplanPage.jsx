import React, {Component} from 'react';
import './CSS/Mealplans.css';
import ResultArea from "./ResultArea";


class MealplanPage extends Component {
    render() {
        return (
            <div className="Mealplan">
                <div className="searchContainer">
                    <input ref="searchBar" type="text" placeholder="Søg efter madplaner..." onKeyPress={this.handleSearch}/>
                </div>
                <ResultArea type="ingredient"/>

            </div>
        );
    }
}

export default MealplanPage;
