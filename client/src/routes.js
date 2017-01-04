/*
 * routes.js
 *
 * Copyright (c) 2017, Tobias Koltsch. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/lgpl.txt>.
 */

import React from 'react';
import { Route, Redirect } from 'react-router';

import ApplicationLayout from './components/layout/ApplicationLayout';
import EmployeePage from './containers/EmployeePage';
import SecondTestPage from './containers/SecondTestPage';

const routes =
  <Route>
    <Redirect from="/" to="/employees"/>
    <Route path="/" component={ApplicationLayout}>
        <Route path="employees" component={EmployeePage}/>
        <Route path="second" component={SecondTestPage}/>
    </Route>
  </Route>;

export default routes;