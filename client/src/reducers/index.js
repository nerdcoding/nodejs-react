import { combineReducers } from 'redux';

import { routeReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';

import employees from './employees';
import currentEmployee from './currentEmployee';

const rootReducer = combineReducers({
  employees,
  currentEmployee,
  routing: routeReducer,
  i18n: i18nReducer
});

export default rootReducer;
