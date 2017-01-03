/*
 * Footer.js
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
import FilterLink from '../containers/FilterLink';

export default function Footer() {
    return (
        <p>
            Show:
            {" "}
            <FilterLink filter="SHOW_ALL">
                All
            </FilterLink>
            {", "}
            <FilterLink filter="SHOW_ACTIVE">
                Active
            </FilterLink>
            {", "}
            <FilterLink filter="SHOW_COMPLETED">
                Completed
            </FilterLink>
        </p>
    );
}