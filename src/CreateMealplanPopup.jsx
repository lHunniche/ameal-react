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
            mealplanIsSaved: false,
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
        if (value === "1") {
            this.setState({
                currentNumberOfPeople: "1 person",
            });
        } else {
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
            "name": (this.state.nameOfMealplan === "" ? "Madplan" : this.state.nameOfMealplan),
            "numberOfPeople": parseInt(this.state.currentNumberOfPeople.split(" ")[0]),
            "recipes": this.state.recipes,
        };
        saveMealplan(this, mealplan);
        this.props.removePopup();
        this.setState({
            mealplanIsSaved: true,
        })

    };


    render() {
        if (this.props.popupActive) {
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
        else if(this.state.mealplanIsSaved)
        {
            return (
                <div className="outerPopupSuccess">
                    <div className="innerPopupSuccess">
                        <p className="success-text">Din madplan er gemt! God fornøjelse!</p>
                        <img className="eating_gif" src={require("./CSS/images/eating.gif")} alt=""/>
                        <a href="/mealplans">
                            <img className="success-click" src={require("./CSS/images/check_mark_icon.svg")} alt=""/>
                        </a>

                    </div>
                </div>
            )
        }
        else {
          return (
              <div>

              </div>
          )
        }


    }
}

export default CreateMealplanPopup;
