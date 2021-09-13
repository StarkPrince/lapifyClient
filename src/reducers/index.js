import { combineReducers } from 'redux';

import lapReducer from './lapReducer';

const rootReducer = combineReducers({ lapReducer });

export default rootReducer;