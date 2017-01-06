/*
 * EmployeePaymentsTable.js
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
import {I18n, Localize} from 'react-redux-i18n';

export default function EmployeePaymentsTable({employee}) {
    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th>{I18n.t('application.employmentContract.payment.salary')}</th>
                <th>{I18n.t('application.employmentContract.payment.validFrom')}</th>
                <th>{I18n.t('application.employmentContract.payment.weeklyWorkingHours')}</th>
            </tr>
            </thead>
            <tbody>
            {employee.payments.map((payment) => {
                return (<tr key={payment._id}>
                    <td>{payment.salary}</td>
                    <td><Localize value={payment.validFrom} dateFormat="date.long"/></td>
                    <td>{payment.weeklyWorkingHours}</td>
                </tr>);
            })}
            </tbody>
        </table>
    );
}

EmployeePaymentsTable.propTypes = {
    employee: React.PropTypes.object.isRequired
};
