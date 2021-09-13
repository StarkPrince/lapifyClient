import { combineReducers } from 'redux';

import lapReducer from './lapReducer';
import projectReducer from './projectReducer';

const rootReducer = combineReducers({ lapReducer, projectReducer });

export default rootReducer;