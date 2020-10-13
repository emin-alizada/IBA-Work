import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className={'App'}>
                <div className="container">
                    <Helmet>
                        <meta name={'description'} content={"Choosing language for form"} />
                    </Helmet>
                    <div className="content">
                        <img src="img/text-icon.png" alt="" className="content-icon"/>
                        <ul className="content-links">
                            <li className="content-links-item">
                                <Link to="/signup" className="content-links-item-link">AZE</Link>
                            </li>
                            <li className="content-links-item">
                                <Link to="/signup" className="content-links-item-link">ENG</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;