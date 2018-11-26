import React, { Component } from 'react';
import './CSS/NavigationBar.css';
import {Link} from 'react-router-dom';



class NavigationBar extends Component {
    render() {
        return (
         <div>
             <nav>
                <div className="container-fluid" id="container">
                    <div className="header">
                        aMeal
                    </div>
                    <div>
                        <Link className="nav-link" to="/frontpage">
                            Hjem
                        </Link>
                    </div>
                    <div>
                        <Link className="nav-link" to="/ingredients">
                            Ingredienser
                        </Link>
                    </div>
                </div>
             </nav>
         </div>
        );
    }
}

export default NavigationBar;
