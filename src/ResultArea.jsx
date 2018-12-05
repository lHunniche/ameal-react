import React, {Component} from 'react';
import './CSS/ResultArea.css';
import ResultItem from "./ResultItem";


class ResultArea extends Component {

    render() {

        if (this.props.searchResult) {
            return (
                <div className="result-container">
                    {
                        this.props.searchResult.map((resultItem) => (
                            <ResultItem key={resultItem.name} type={this.props.type} {...resultItem} />
                            // <div className="searchResult" key={resultItem.name}> {resultItem.name} </div>
                        ))
                    }

                </div>
            );
        }

        return (
            <div className="result-container">

            </div>
        );


    }
}

export default ResultArea;
