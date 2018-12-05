import React, {Component} from 'react';
import NavigationBar from './NavigationBar';
import PageNavigator from './PageNavigator';

class App extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <PageNavigator/>
            </div>
        );
    }
}

export default App;
