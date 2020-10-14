import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./css/menu.scss";
import "./css/menu-media.scss";
import headerPhoto from "./img/chayki.png"
import breakfastPhoto from "./img/breakfast.jpg";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <header className="menu-header">
                    <img src={headerPhoto} alt="" className="menu-header-photo"/>
                </header>
                <nav className="menu-nav-bgc">
                    <nav className="container menu-nav">
                        <div className="menu-nav-content">
                            <button className="menu-nav-content-btn">Drinks and Desserts<i
    className="fas fa-chevron-down menu-nav-content-btn-icon"/>
                            </button>
                            {/*<div class="menu-nav-content-dropdown menu-nav-content-dropdown__active">*/}
                            <div className="menu-nav-content-dropdown">
                                <ul className="menu-nav-content-dropdown-list">
                                    <li className="menu-nav-content-dropdown-list-item">
                                        <button className="menu-nav-content-dropdown-list-item-btn">Salads</button>
                                    </li>
                                    <li className="menu-nav-content-dropdown-list-item">
                                        <button
                                            className="menu-nav-content-dropdown-list-item-btn menu-nav-content-dropdown-list-item-btn__active">Salads
                                        </button>
                                    </li>
                                    <li className="menu-nav-content-dropdown-list-item">
                                        <button className="menu-nav-content-dropdown-list-item-btn">Salads</button>
                                    </li>
                                    <li className="menu-nav-content-dropdown-list-item">
                                        <button className="menu-nav-content-dropdown-list-item-btn">Salads</button>
                                    </li>
                                    <li className="menu-nav-content-dropdown-list-item">
                                        <button className="menu-nav-content-dropdown-list-item-btn">Drinks and
                                            Desserts
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <button className="menu-nav-content-waiter">Call Waiter</button>
                        </div>
                    </nav>
                </nav>
                <div className="menu-category-bgc">
                    <div className="container menu-category">
                        <h3 className="menu-category-header">Salads</h3>
                        <div className="menu-category-list">
                            <div className="menu-category-list-item">
                                <div className="menu-category-list-item-photo">
                                    <img src={breakfastPhoto} alt="" className="menu-category-list-item-photo-img"/>
                                        <p className="menu-category-list-item-photo-price">30 AZN</p>
                                </div>
                                <div className="menu-category-list-item-content">
                                    <div className="menu-category-list-item-content-info">
                                        <h4 className="menu-category-list-item-content-info-header">Azerbaijan breakfast for 2 person</h4>
                                        <p className="menu-category-list-item-content-info-food">Cream/honey/fig jam/motal cheese/suzma/fried egg/fresh salads/olive/ful/tea</p>
                                    </div>
                                    <div className="menu-category-list-item-content-controls">
                                        <button className="menu-category-list-item-content-controls-btn"><i className="fas fa-plus"/></button>
                                        <span className="menu-category-list-item-content-controls-current">0</span>
                                        <button className="menu-category-list-item-content-controls-btn"><i className="fas fa-minus"/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-category-list-item">
                                <div className="menu-category-list-item-photo">
                                    <img src={breakfastPhoto} alt="" className="menu-category-list-item-photo-img"/>
                                        <p className="menu-category-list-item-photo-price">30 AZN</p>
                                </div>
                                <div className="menu-category-list-item-content">
                                    <div className="menu-category-list-item-content-info">
                                        <h4 className="menu-category-list-item-content-info-header">Azerbaijan breakfast for 2 person</h4>
                                        <p className="menu-category-list-item-content-info-food">Cream/honey/fig jam/motal cheese/suzma/fried egg/fresh salads/olive/ful/tea</p>
                                    </div>
                                    <div className="menu-category-list-item-content-controls">
                                        <button className="menu-category-list-item-content-controls-btn"><i className="fas fa-plus"/></button>
                                        <span className="menu-category-list-item-content-controls-current">0</span>
                                        <button className="menu-category-list-item-content-controls-btn"><i className="fas fa-minus"/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-category-list-item">
                                <div className="menu-category-list-item-photo">
                                    <img src={breakfastPhoto} alt="" className="menu-category-list-item-photo-img"/>
                                    <p className="menu-category-list-item-photo-price">30 AZN</p>
                                </div>
                                <div className="menu-category-list-item-content">
                                    <div className="menu-category-list-item-content-info">
                                        <h4 className="menu-category-list-item-content-info-header">Azerbaijan breakfast for 2 person</h4>
                                        <p className="menu-category-list-item-content-info-food">Cream/honey/fig jam/motal cheese/suzma/fried egg/fresh salads/olive/ful/tea</p>
                                    </div>
                                    <div className="menu-category-list-item-content-controls">
                                        <button className="menu-category-list-item-content-controls-btn"><i className="fas fa-plus"/></button>
                                        <span className="menu-category-list-item-content-controls-current">0</span>
                                        <button className="menu-category-list-item-content-controls-btn"><i className="fas fa-minus"/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-category-list-item">
                                <div className="menu-category-list-item-photo">
                                    <img src={breakfastPhoto} alt="" className="menu-category-list-item-photo-img"/>
                                    <p className="menu-category-list-item-photo-price">30 AZN</p>
                                </div>
                                <div className="menu-category-list-item-content">
                                    <div className="menu-category-list-item-content-info">
                                        <h4 className="menu-category-list-item-content-info-header">Azerbaijan breakfast for 2 person</h4>
                                        <p className="menu-category-list-item-content-info-food">Cream/honey/fig jam/motal cheese/suzma/fried egg/fresh salads/olive/ful/tea</p>
                                    </div>
                                    <div className="menu-category-list-item-content-controls">
                                        <button className="menu-category-list-item-content-controls-btn"><i className="fas fa-plus"/></button>
                                        <span className="menu-category-list-item-content-controls-current">0</span>
                                        <button className="menu-category-list-item-content-controls-btn"><i className="fas fa-minus"/></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Menu.propTypes = {};

export default Menu;