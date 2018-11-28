import React, {Component} from 'react';
import './CSS/ResultArea.css';


class ResultArea extends Component {



    render() {

        if (this.props.searchResult) {
            return (
                <div className="result-container">
                    {
                        this.props.searchResult.map((resultItem) => (
                            <div className="searchResult" key={resultItem.name}> {resultItem.name} </div>
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
