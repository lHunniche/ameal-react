import React, {Component} from 'react';
import './CSS/FrontPage.css';
import {Route, Switch} from "react-router-dom";
import FrontPage from "./FrontPage";
import Ingredients from "./Ingredients";
import Mealplans from "./Mealplans";
import Recipes from "./Recipes";

class PageNavigator extends Component {
    render() {
        return (
            <div className="CurrentPage">
                <Switch>
                    <Route exact path='/' component={FrontPage}/>
                    <Route exact path='/mealplans' component={Mealplans}/>
                    <Route exact path='/recipes' component={Recipes}/>
                    <Route exact path='/ingredients' component={Ingredients}/>
                </Switch>
            </div>
        );
    }
}

export default PageNavigator;
