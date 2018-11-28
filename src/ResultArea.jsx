import React, {Component} from 'react';
import './CSS/ResultArea.css';
import ResultItem from "./ResultItem";


class ResultArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.content);

        return (
            <div className="result-container">
                {
                    this.state.content.map((item) => (
                        <ResultItem key={item.name} name={item.name}/>
                    ))
                }
            </div>
        );
    }
}

export default ResultArea;
