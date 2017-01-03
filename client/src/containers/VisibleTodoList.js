/*
 * VisibleTodoList.js
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
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';

function getVisibleTodos(todos, filter) {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
    }
}

function mapStateToProps(state) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
}

import {toggleTodo} from '../actions';
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);