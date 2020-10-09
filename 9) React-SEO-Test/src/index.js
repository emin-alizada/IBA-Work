import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from "./Form";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/signup" component={Form} />
              <Route exact path="/" component={App} />
              <Redirect to={'/'} />
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


