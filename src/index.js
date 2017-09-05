"use strict";
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router';
import reducers from './reducers';
import App from './components/App';
import Callback from './components/Callback';
import TrackDetails from './containers/TrackDetailsContainer';
import NotFound from './components/NotFound';
// AUTH OF SOUND-CLOUD
import {CLIENT_ID, REDIRECT_URI} from './constants/auth';

SC.initialize({client_id: CLIENT_ID, redirect_uri: REDIRECT_URI});

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

import Stream from './containers/StreamContainer';

const Routes = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Stream}/>
                <Route path="callback" component={Callback}/>
                <Route path="/user/:id" component={TrackDetails}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>
);


render(
    Routes,
    document.getElementById('app')
);