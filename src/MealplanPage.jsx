import React, {Component} from 'react';
import './CSS/MealplanPage.css';
import MealplanLister from "./MealplanLister";
import MealplanViewer from "./MealplanViewer";


class MealplanPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasSelectedMealplan: false,
            selectedMealplan: [],
        }
    }

    toggleMealplanSelected = (mealplan) => {
        this.setState({
            hasSelectedMealplan: true,
            selectedMealplan: mealplan,
        });
    };

    toggleMealplanDeselected = (event) => {
        if (event.keyCode === 27) {
            this.setState({
                hasSelectedMealplan: false,
                selectedMealplan: [],
            })
        }

    };


    componentDidMount() {
        document.addEventListener("keydown", this.toggleMealplanDeselected, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.toggleMealplanDeselected, false);
    }


    render() {
        return (
            <div className="Mealplan">

                <a href={"/mealplans/add"}>
                    <img className="add-mealplan-icon" src={require("./CSS/images/add_icon.png")} alt=""/>
                </a>

                <MealplanLister toggleMealplanSelected={this.toggleMealplanSelected}/>
                <MealplanViewer selectedMealplan={this.state.selectedMealplan}
                                hasSelectedMealplan={this.state.hasSelectedMealplan}/>
            </div>
        );

    }
}

export default MealplanPage;
