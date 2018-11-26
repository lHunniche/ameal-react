import React, { Component } from 'react';
import './CSS/FrontPage.css';
import {Route, Switch} from "react-router-dom";
import FrontPage from "./FrontPage";
import Ingredients from "./Ingredients";

class CurrentPage extends Component {
    render() {
        return (
            <div className="CurrentPage">
                <Switch>
                    <Route exact path='/frontpage' component={ FrontPage } />
                    <Route exact path='/ingredients' component={ Ingredients } />
                </Switch>
            </div>
        );
    }
}

export default CurrentPage;
