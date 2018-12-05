import React, {Component} from 'react';
import './CSS/ResultIngredient.css';


class ResultIngredient extends Component {

    handleClick = () => {
        let wikiUrl = "https://da.wikipedia.org/wiki/";
        window.open(wikiUrl + this.props.name);
    }

    render() {

        if (this.props.name) {
            let result = this.props;
            return (
                <div className="searchResult" onClick={this.handleClick}>{result.name}
                <hr className="h-line"/>
                    <div className="infoContainer">
                        <p className="ingredientInfoName">Kalorier:</p>
                        <p className="ingredientInfoAmount">{result.calories}</p>

                        <p className="ingredientInfoName">Protein:</p>
                        <p className="ingredientInfoAmount">{result.protein}</p>

                        <p className="ingredientInfoName">Kulhydrater:</p>
                        <p className="ingredientInfoAmount">{result.carbohydrates}</p>

                        <p className="ingredientInfoName">Fedt:</p>
                        <p className="ingredientInfoAmount">{result.fat}</p>
                    </div>

                </div>
            );
        }

        return (
            <div>ERROR: Selfdestructing in 5.. 4..</div>
        )

    }
}

export default ResultIngredient;