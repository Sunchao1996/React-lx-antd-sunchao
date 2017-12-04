import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, hashHistory, Router} from 'react-router';
import App from './public/javascripts/container/app';
import Index from './public/javascripts/container/index'
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={App}/>
            <Route path="index" component={Index}/>
        </Route>
    </Router>
    ,
    document.getElementById('root')
);

