import React, {Component} from 'react';
import './CSS/NavigationBar.css';
import {Link} from 'react-router-dom';


class NavigationBar extends Component {
    render() {
        return (
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
                                    Madplaner
                                </Link>
                            </li>

                            <li>
                                <Link className="nav-link" to="/recipes">
                                    Opskrifter
                                </Link>
                            </li>

                            <li>
                                <Link className="nav-link" to="/ingredients">
                                    Ingredienser
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default NavigationBar;
