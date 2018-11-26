import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import CurrentPage from './CurrentPage';

class App extends Component {

    render() {
        return(
            <div className='container-fluid'>
                <NavigationBar/>
                <CurrentPage />
            </div>
        );
    }
}

export default App;
