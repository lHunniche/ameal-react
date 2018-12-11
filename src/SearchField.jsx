import React, {Component} from 'react';
import './CSS/SearchField.css';



class SearchField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchParam: "",
            onKey: this.props.onKey,
        }
    }


    updateInputValue = (event) => {
        this.setState({
            searchParam: event.target.value,
        });
    };

    doSearch = (event) => {
        this.state.onKey(event, this.state.searchParam);
    };



    render() {
        return (
            <div className="searchFieldContainer">
                <input className="search-bar" type="text" placeholder={this.props.placeholder} onChange={event => this.updateInputValue(event)} onKeyPress={this.doSearch}/>
            </div>
        )


    }
}

export default SearchField;