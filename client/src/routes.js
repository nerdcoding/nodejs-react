import React from 'react';
import { Route, Redirect} from 'react-router';

import EmployeePage from './containers/EmployeePage';

const routes =
  <Route>
    <Redirect from="/" to="/employees"/>
    <Route path="employees" component={EmployeePage}/>
  </Route>;

export default routes;