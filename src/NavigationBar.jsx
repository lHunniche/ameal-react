import React, {Component} from 'react';
import './CSS/NavigationBar.css';
import {Link} from 'react-router-dom';


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid" id="navbar-container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                <p className="nav-text">aMeal</p>
                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link className="nav-link" to="/mealplans">
                                    {/*<p className="nav-text">Madplaner</p>*/}
                                    Madplaner
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/recipes">
                                    {/*<p className="nav-text">Opskrifter</p>*/}
                                    Opskrifter
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/ingredients">
                                    {/*<p className="nav-text">Ingredienser</p>*/}
                                    Ingredienser
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavigationBar;
