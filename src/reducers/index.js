import {combineReducers} from 'redux';
import tracksReducers from './tracksReducer';
import authReducer from './authReducer';
import playerReducer from './playerReducer';

export default combineReducers({
    tracksList: tracksReducers,
    auth: authReducer,
    player: playerReducer
})
