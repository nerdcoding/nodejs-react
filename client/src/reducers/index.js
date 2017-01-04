import { combineReducers } from 'redux';

import employees from './employees';

import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  employees,
  routing: routeReducer
});

export default rootReducer;
