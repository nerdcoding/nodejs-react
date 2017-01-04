/*
 * EmployeeSummary.js
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

import React from 'react/react';

export default function EmployeeSummary({ employee }) {
    return (
        <div className="col-sm-4 col-md-4 col-lg-4 thumbnail" >
            <img className="pull-left" src={'data:image/png;base64,' + employee.imageBase64}  />

            <div className="caption">
                <h4>{ employee.firstName }, { employee.lastName }</h4>
            </div>
        </div>
    );
}

EmployeeSummary.propTypes = {
    employee:       React.PropTypes.object.isRequired
};