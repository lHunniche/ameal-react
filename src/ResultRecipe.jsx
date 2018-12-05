import React, {Component} from 'react';
import './CSS/ResultRecipe.css';
import Popup from 'react-popup';

class ResultRecipe extends Component {


    handleClick = () => {
        Popup.alert("Hej");
    };

    render() {

        if (this.props.name) {
            let result = this.props;
            let style = {
                backgroundImage: 'url(' + this.props.image_url_large + ')',
            };
            return (
                <div className="searchResult" style={style} onClick={this.handleClick}>{result.name}
                </div>
            );
        }

        return (
            <div>ERROR: Selfdestructing in 5.. 4..</div>
        )

    }
}

export default ResultRecipe;