/*
 * currentEmployee.js
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

import { LOAD_EMPLOYEES_BY_ID_WITH_PAYMENTS, UPDATE_EMPLOYEE } from '../constants/ActionTypes';

export default function currentEmployee(state = null, action) {
    switch (action.type) {
        case LOAD_EMPLOYEES_BY_ID_WITH_PAYMENTS:
            return action.currentEmployee;
        case UPDATE_EMPLOYEE:
            return action.currentEmployee;
        default:
            return state;
    }
}
