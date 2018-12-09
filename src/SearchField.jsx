import React, {Component} from 'react';
import './CSS/SearchField.css';



class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParam: "",
        }
    }


    updateInputValue = (event) => {
        this.setState({
            searchParam: event.target.value,
        });
    };

    getInputValue = () => {
        return this.state.searchParam;
    };



    render() {
        return (
            <div className="searchContainer">
                <input className="search-bar" type="text" placeholder={this.props.placeholder} onChange={event => this.updateInputValue(event)}/>
            </div>
        )


    }
}

export default SearchField;