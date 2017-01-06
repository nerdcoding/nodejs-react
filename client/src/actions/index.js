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

import {fetchJson, sendJson} from '../backend/Backend';
import { routeActions } from 'react-router-redux';

import {LOAD_ALL_EMPLOYEES, LOAD_EMPLOYEES_BY_ID_WITH_PAYMENTS, UPDATE_EMPLOYEE}  from '../constants/ActionTypes';

export function loadEmployees() {
    return dispatch => fetchJson('/api/employees').then(allEmployees => {
        dispatch({
            type:  LOAD_ALL_EMPLOYEES,
            employees: allEmployees
        });
    });
}

export function loadEmployeeByIdWithPayments(employeeId) {
    return dispatch => fetchJson(`/api/employees/${employeeId}`).then(employee => {
        fetchJson(`/api/employees/${employeeId}/payments`).then(payments => {
            employee["payments"] = payments;
            dispatch({
                type: LOAD_EMPLOYEES_BY_ID_WITH_PAYMENTS,
                currentEmployee: employee
            });
        });
    });
}

export function updateEmployee(employee) {
    return dispatch => sendJson('put', `/api/employees/${employee._id}`, employee).then(updatedEmployee => {
        fetchJson(`/api/employees/${updatedEmployee._id}/payments`).then(payments => {
            updatedEmployee["payments"] = payments;
            dispatch({
                type: UPDATE_EMPLOYEE,
                currentEmployee: updatedEmployee
            });
            dispatch(routeToMain());
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