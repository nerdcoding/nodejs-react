/*
 * EmployeeDetails.js
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

import EmployeePersonalData from './EmployeePersonalData'
import EmployeeEmploymentContractData from './EmployeeEmploymentContractData'



export default class EmployeeDetails extends React.Component {

    constructor(props) {
        super(props);

        this.cancel = this.cancel.bind(this);
        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const { name: fieldName, value: fieldValue } = event.target;
        const {employee} = this.props;

        employee[fieldName] = fieldValue;
        this.setState({
            currentEmployee: employee
        });
    }

    cancel() {
        const {routeToMain} = this.props;
        routeToMain();
    }

    save() {
        const {employee, updateEmployee} = this.props;
        updateEmployee(employee);
    }

    render() {
        const {employee} = this.props;

        return (
            <div>
                <div className="row">
                    <div className="col-sm-2 col-md-2 col-lg-2">
                        <img className="pull-left" src={'data:image/png;base64,' + employee.imageBase64}  />
                    </div>
                    <div className="col-sm-10 col-md-10 col-lg-10">
                        <h2>{ employee.firstName }, { employee.lastName }</h2>
                    </div>
                </div>
                <EmployeePersonalData employee={employee} onChange={this.onChange} />
                <EmployeeEmploymentContractData employee={employee} />

                <button className="btn" onClick={this.cancel} >Cancel</button>
                <button className="btn btn-primary" onClick={this.save} >Save</button>
            </div>
        );
    }


}


EmployeeDetails.propTypes = {
    employee: React.PropTypes.object.isRequired,
    updateEmployee: React.PropTypes.func.isRequired
};


