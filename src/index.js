"use strict";
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';
const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducers, middleware);

import Stream from './components/Stream';

const tracks = [
    {
        title: 'Some track'
    },
    {
        title: 'Some other track'
    }
];

render(
    <Provider store={store}>
        <Stream tracks={tracks} />
    </Provider>,
    document.getElementById('app')
);