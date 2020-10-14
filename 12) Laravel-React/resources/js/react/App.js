import React from 'react';
import './scss/reset.scss';
import './scss/App.scss';
import Login from "./pages/login";
import CategoriesMenu from "./pages/CategoriesMenu";
import LanguageSelector from "./pages/LanguageSelector";
import Menu from "./pages/Menu";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import NotFound from "./pages/404";
import Landing from "./pages/Landing";
import Loader from "./Components/Loader";


class App extends React.Component {
    componentDidMount() {
        this.getCSRFProtection();
    }

    render() {
        return (
            <div className={"app"}>
                    {/*<Login/>*/}
                    {/*<CategoriesMenu/>*/}
                    {/*<LanguageSelector/>*/}
                    {/*<Menu/>*/}

                    <Switch>
                        <Route path="/:restaurant/categories" component={CategoriesMenu} />
                        <Route path="/:restaurant/menu" component={Menu} />
                        <Route path="/:restaurant" component={LanguageSelector} />
                        {/*<Route path="/404" component={NotFound} />*/}
                        <Route exact path="/" component={Landing} />
                        {/*<Redirect to="/404" />*/}
                    </Switch>
            </div>
        );
    }

    getCSRFProtection = async () => {
        await axios.get('/sanctum/csrf-cookie')
            .then( (response) => {
                // console.log(response);
            })
            .catch(e => {
                console.error(e);
            })
    };
}


export default App;
