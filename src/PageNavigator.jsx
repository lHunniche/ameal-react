import React, {Component} from 'react';
import './CSS/FrontPage.css';
import {Route, Switch} from "react-router-dom";
import FrontPage from "./FrontPage";
import IngredientPage from "./IngredientPage";
import MealplanPage from "./MealplanPage";
import RecipePage from "./RecipePage";

class PageNavigator extends Component {
    render() {
        return (
            <div className="CurrentPage">
                <Switch>
                    <Route exact path='/' component={FrontPage}/>
                    <Route exact path='/mealplans' component={MealplanPage}/>
                    <Route exact path='/recipes' component={RecipePage}/>
                    <Route exact path='/ingredients' component={IngredientPage}/>
                </Switch>
            </div>
        );
    }
}

export default PageNavigator;
