import { combineReducers } from 'redux';

import todos from './todos';
import visibilityFilter from './visibilityFilter';
import employees from './employees';

import { routeReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  employees,
  routing: routeReducer
});

export default rootReducer;
