/*
 * EmployeeDetailsPage.js
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

import React, { PropTypes } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {I18n} from 'react-redux-i18n';

import EmployeeDetails from '../components/employee/details/EmployeeDetails';

class EmployeeDetailsPage extends React.Component {

    componentDidMount() {
        this.props.loadEmployeeByIdWithPayments(this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.params.id !== this.props.params.id) {
            this.props.loadEmployeeByIdWithPayments(nextProps.params.id);
        }
    }

    render() {
        const { currentEmployee, updateEmployee, routeToMain, setTitle } = this.props;

        if (currentEmployee) {
            setTitle(currentEmployee.firstName + " " + currentEmployee.lastName + " - " + I18n.t('application.title'));
            return <EmployeeDetails employee={currentEmployee} updateEmployee={updateEmployee} routeToMain={routeToMain} />;
        } else {
            setTitle(I18n.t('application.title'));
            return (
                <div><p>{I18n.t('application.employee.notLoaded')}</p></div>);
        }
    }
}
EmployeeDetailsPage.propTypes = {
    currentEmployee: PropTypes.object,
    paymentsOfCurrentEmployee: PropTypes.array,
    loadEmployeeByIdWithPayments: PropTypes.func.isRequired,
    updateEmployee: PropTypes.func.isRequired,
    routeToMain: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired
};

import * as Actions from '../actions';

function mapStateToProps(state) {
    return {
        currentEmployee: state.currentEmployee,
        paymentsOfCurrentEmployee: state.paymentsOfCurrentEmployee
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetailsPage);