import {combineReducers} from 'redux';
import tracksReducers from './tracksReducer';
import authReducers from './authReducers';

export default combineReducers({
    tracks: tracksReducers,
    auth: authReducers
})