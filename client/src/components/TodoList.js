/*
 * TodoList.js
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
import Todo from './Todo';

export default function TodoList({todos, onTodoClick}) {
    return (
        <ul>
            {todos.map(todo =>
                <Todo key={todo.id}
                      {...todo}
                      onClick={() => onTodoClick(todo.id)} />
            )}
        </ul>
    );
}

TodoList.propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        completed: React.PropTypes.bool.isRequired,
        text: React.PropTypes.string.isRequired
    })).isRequired,
    onTodoClick: React.PropTypes.func.isRequired
};