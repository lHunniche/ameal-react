import React, {Component} from 'react';
import "./CSS/CreateMealplanPopup.css"
import {saveMealplan} from "./WebCalls";


class CreateMealplanPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            removePopupWithEscape: this.props.removePopupWithEscape,
            currentNumberOfPeople: "2 personer",
            nameOfMealplan: "",
            recipes: this.props.recipes,
        }


    }


    componentDidMount() {
        document.addEventListener("keydown", this.state.removePopupWithEscape, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.state.removePopupWithEscape, false);
    }

    updateNumberOfPeople = (event) => {
        let value = event.target.value;
        if(value === "1")
        {
            this.setState({
                currentNumberOfPeople: "1 person",
            });
        }
        else
        {
            this.setState({
               currentNumberOfPeople: value + " personer",
            });
        }

    };

    updateNameOfMealplan = (event) => {
        this.setState({
            nameOfMealplan: event.target.textContent,
        });
    };

    saveMealplan = () => {
        let mealplan = {
            "numberOfPeople": this.state.currentNumberOfPeople,
            "name": this.state.nameOfMealplan,
            "recipeList": this.state.recipes,

        };
        saveMealplan(this, mealplan);
    };


    render() {

        if (!this.props.popupActive) {
            return (
                <div>
                </div>
            )
        } else {
            return (
                <div className="outerPopupMealplan">
                    <div className="innerPopupMealplan">
                        <div className="mealplan-name-div" contentEditable="true" suppressContentEditableWarning={true} onInput={this.updateNameOfMealplan}>Giv den et navn!</div>
                        <p className="number-of-people-text">Hvor mange personer?</p>
                        <div className="slider-container">
                            <input type="range" min="1" max="12" defaultValue="2" className="people-slider" onChange={this.updateNumberOfPeople}/>
                        </div>
                        <p className="this-many-people">{this.state.currentNumberOfPeople}</p>
                        <img className="save-mealplan-image" src={require("./CSS/images/check_mark_icon.svg")} alt="" onClick={this.saveMealplan}/>
                    </div>


                </div>
            );
        }


    }
}

export default CreateMealplanPopup;
