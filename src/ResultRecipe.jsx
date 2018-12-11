import React, {Component} from 'react';
import './CSS/ResultRecipe.css';
import RecipeInfoPopup from "./RecipeInfoPopup";

class ResultRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupActive: false,
            isAddable: this.props.isAddable,
            isRemovable: this.props.isRemovable,
        }
    }


    handlePopupClick = () => {
        this.setState({
            popupActive: true,
        }, function () {
            //callback function goes in here
        });
    };

    removePopup = (event) => {
        event.stopPropagation();
        this.setState({
            popupActive: false,
        });
    };

    closePopupOnEscape = (event) => {
        if (event.keyCode === 27) {
            this.setState({
                popupActive: false,
            });
        }
    };

    handleAddClick = () => {
        this.props.onClick(this.props);
    };

    handleRemoveClick = () => {
       this.props.onClick(this.props.keyId);
    };


    render() {
        if (this.props && !this.state.popupActive) {
            let result = this.props;
            let style = {
                backgroundImage: 'url(' + this.props.image_url_large + ')',
            };

            // This is for recipes that are addable. Used in CreateMealplan.
            if (this.state.isAddable) {
                return (
                    <div className="searchResult-container">
                        <div className="searchResultSelection" style={style} onClick={this.handlePopupClick}>{result.name}</div>
                        <div className="image-container">
                            <img className="add-recipe-icon" src={require("./CSS/images/add_icon.png")} alt="" onClick={this.handleAddClick}/>
                        </div>
                    </div>
                )
            }
            // This is for recipes that are removable. Used in CreateMealplan.
            else if(this.state.isRemovable)
            {
                return (
                    <div className="searchResult-container">
                        <div className="searchResultSelection" style={style} onClick={this.handlePopupClick}>{result.name}</div>
                        <div className="image-container">
                            <img className="remove-recipe-icon" src={require("./CSS/images/cancel_icon.png")} alt="" onClick={this.handleRemoveClick}/>
                        </div>
                    </div>
                )
            }
            // This is for recipes that are neither addable or removable. Used for browsing recipes.
            else
            {
                return (
                    <div className="searchResultSelection" style={style} onClick={this.handlePopupClick}>{result.name}
                    </div>
                );
            }
        }
        // This is for when a recipe is clicked, and the popup is set to display instead.
        else if (this.state.popupActive) {
            return (
                <RecipeInfoPopup {...this.props} removePopup={this.removePopup} removePopupWithEscape={this.closePopupOnEscape}/>
            );
        }
        return (
            <div>ERROR: Selfdestructing in 5.. 4..</div>
        )
    }
}
export default ResultRecipe;