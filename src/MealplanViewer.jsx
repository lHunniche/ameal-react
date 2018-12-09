import React, {Component} from 'react';
import './CSS/MealplanViewer.css';
import ResultRecipe from "./ResultRecipe";


class MealplanViewer extends Component {


    render() {
        if (this.props.hasSelectedMealplan) {
            return (
                <div className="mealplan-container">
                    {
                        this.props.selectedMealplan.recipes.map((recipe,i) => (
                            <div key={i} className="recipe-container">
                                <p className="day">Dag {i+1}</p>
                                <ResultRecipe {...this.props.selectedMealplan.recipes[i]}/>
                            </div>
                        ))
                    }
                </div>
            )
        }

        return <div/>

    }
}

export default MealplanViewer;
