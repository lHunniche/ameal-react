import React, {Component} from 'react';
import './CSS/RecipeSelector.css';
import ResultRecipe from "./ResultRecipe";


class RecipeSelector extends Component {

    render() {

        if(this.props.type === "addable")
        {
            return (
                <div className="added-recipes">
                    {
                        this.props.searchResult.map((result, i) => (
                            <ResultRecipe key={i} {...result} isAddable={true} isRemovable={false} onClick={this.props.onClick}/>
                        ))
                    }

                </div>
            );
        }


        else if(this.props.type === "removable")
        {
            return (
                <div className="removed-recipes">
                    {
                        this.props.selections.map((result, i) => (
                            <ResultRecipe key={i} keyId={i} {...result} isAddable={false} isRemovable={true} onClick={this.props.onClick}/>
                        ))
                    }
                </div>
            );
        }

    }
}

export default RecipeSelector;
