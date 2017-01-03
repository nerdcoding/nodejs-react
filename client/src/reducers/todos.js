/*
 * todos.js
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

import { ADD_TODO, TOGGLE_TODO } from '../constants/ActionTypes';

function todo(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });
        default:
            return state;
    }
}

export default function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case TOGGLE_TODO:
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state;
    }
}