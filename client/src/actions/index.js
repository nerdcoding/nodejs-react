/*
 * index.js
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

import {fetchJson} from '../backend/Backend';
import { routeActions } from 'react-router-redux';

import {LOAD_ALL_EMPLOYEES, LOAD_EMPLOYEES_BY_ID} from '../constants/ActionTypes';

export function loadEmployees() {
    return dispatch => fetchJson('/api/employees').then(allEmployees => {
        dispatch({
            type:  LOAD_ALL_EMPLOYEES,
            employees: allEmployees
        });
    });
}

export function loadEmployeeById(employeeId) {
    return dispatch => fetchJson(`/api/employees/${employeeId}`).then(employee => {
        dispatch({
            type: LOAD_EMPLOYEES_BY_ID,
            currentEmployee: employee
        });
    });
}

export function setTitle(title) {
    return () => {
        if (typeof document !== 'undefined') document.title = title;
    }
}

export function routeToMain() {
    return routeActions.push('/');
}

export function pushPath(path) {
    return routeActions.push(path);
}

export function replacePath(path) {
    return routeActions.replace(path);
}