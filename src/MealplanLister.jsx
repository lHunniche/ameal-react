import React, {Component} from 'react';
import './CSS/MealplanLister.css';
import {searchMealplan} from "./WebCalls";


class MealplanLister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        this.setState({
            items: searchMealplan(this),
        });
    }


    handleMealplanSelection = (i) => {
        this.props.toggleMealplanSelected(this.state.items[i]);
    };


    render() {
        if (this.state.isLoaded) {
            return (
                <div className="mealplans-container">
                    <h1 className="mealplan-tag">Mine madplaner</h1>
                    {
                        this.state.items.map((mealplan, i) => (
                            <div key={i} onClick={() => this.handleMealplanSelection(i)}>
                                <img className="right_icon" src={require("./CSS/images/arrow_right.png")} alt=""/>
                                <div className="mealplan-list-item" key={i}>{mealplan.name}</div>
                            </div>

                        ))
                    }
                </div>
            )
        }

        return (
            <div>
               <h1>Loading...</h1>
            </div>
        )

    }
}

export default MealplanLister;
