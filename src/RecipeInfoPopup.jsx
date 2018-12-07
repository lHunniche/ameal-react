import React, {Component} from 'react';
import './CSS/RecipeInfoPopup.css';


class RecipeInfoPopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outerPopupOnClick: this.props.removePopup,
            removePopupWithEscape: this.props.removePopupWithEscape,
            recipeImage: this.props.image_url_large,
            ingredientList: this.props.ingredientList,
            name: this.props.name,
            recipe_text: this.props.recipe_text,
            recipeGuide: this.props.recipeGuide,
        }
    }

    innerPopupClickHandler = (event) => {
        if (event) {
            event.stopPropagation();
        }

    };


    componentDidMount(){
        document.addEventListener("keydown", this.state.removePopupWithEscape, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.state.removePopupWithEscape, false);
    }


    render() {
        console.log(this.props.ingredientList);
        return (
            <div className="outerPopup" onClick={this.state.outerPopupOnClick}>
                <div className="innerPopup" onClick={this.innerPopupClickHandler}>
                    <h1 className="ingredient-name">{this.state.name}</h1>
                    <div className="image-text-wrapper">
                        <img className="popup-image" src={this.state.recipeImage} alt=""/>
                        <p className="recipe-text">{this.state.recipe_text}</p>

                    </div>
                    <div className="ingredient-guide-wrapper">
                        <div className="chef_hat_icon_wrapper">
                            <img className="recipe_chef_hat" src={require("./CSS/images/recipe_chef_hat.png")} alt=""/>
                        </div>

                        <div className="recipe_info">
                            <img className="plate_icon" src={require("./CSS/images/plate_icon.png")} alt=""/>
                            <p className="people">6 personer</p>

                            <img className="timer_icon" src={require("./CSS/images/timer_icon.png")} alt=""/>
                            <p className="time">45 min.</p>

                        </div>

                        <div className="guide-wrapper">
                            <p className="ingredient-tag">Tilberedning</p>
                            <hr className="ingredient-seperator"/>
                            {
                                this.state.recipeGuide.guideSteps.map((guideStep, i) => (
                                    <p key={i} className="guide-step">{guideStep.text_content}</p>
                                ))
                            }
                        </div>

                        <div className="ingredient-wrapper">
                            <p className="ingredient-tag">Ingredienser</p>
                            <hr className="ingredient-seperator"/>
                            <ul className="popup-ingredient-list">
                                {
                                    this.state.ingredientList.map((ingredientItem, i) => (
                                        <li key={i}
                                            className="popup-ingredient-item">{ingredientItem.amount} {ingredientItem.ingredient.name}</li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>


                </div>

            </div>
        );
    }
}

export default RecipeInfoPopup;