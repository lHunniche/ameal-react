import React, {Component} from 'react';
import './CSS/ResultRecipe.css';
import RecipeInfoPopup from "./RecipeInfoPopup";

class ResultRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popupActive: false,
        }
    }


    handleClick = () => {
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
        if(event.keyCode === 27) {
            this.setState ({
               popupActive: false,
            });
        }
    };


    render() {

        if (this.props && !this.state.popupActive) {
            let result = this.props;
            let style = {
                backgroundImage: 'url(' + this.props.image_url_large + ')',
            };
            return (
                <div className="searchResult" style={style} onClick={this.handleClick}>{result.name}
                </div>
            );
        }
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