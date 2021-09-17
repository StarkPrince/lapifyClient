import { combineReducers } from 'redux';

import lapReducer from './lapReducer';
import projectReducer from './projectReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({ lapReducer, projectReducer, userReducer });

export default rootReducer;