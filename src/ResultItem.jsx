import React, {Component} from 'react';
import './CSS/ResultItem.css';
import ResultIngredient from "./ResultIngredient";
import ResultRecipe from "./ResultRecipe";


class ResultItem extends Component {

    render() {
        if(this.props.type === "ingredient")
        {
            return (
                <ResultIngredient {...this.props}/>
            )
        }
        else if(this.props.type === "recipes")
        {
            return (
                <ResultRecipe {...this.props}/>
            )
        }

        return (
            <div>Unhandled Type Error</div>
        )


    }
}

export default ResultItem;