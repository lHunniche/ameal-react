import React, {Component} from 'react';
import './CSS/SearchButton.css';



class SearchButton extends Component {

    render() {
        return (
            <button className="search-button" onClick={this.props.onClick}>
                {this.props.button_text}
            </button>
        )


    }
}

export default SearchButton;