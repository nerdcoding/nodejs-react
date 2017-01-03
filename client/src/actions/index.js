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

import {ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO} from '../constants/ActionTypes';

var nextTodoId = 0;
export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    };
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}