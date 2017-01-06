/*
 * EmployeeTermsOfEmploymentData.js
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

import EmployeePaymentsTable from './EmployeePaymentsTable';

export default function EmployeeEmploymentContractData({employee}) {
    return (
        <div>
            <div className="row top-buffer">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h3>{I18n.t('application.employmentContract.title')}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <h4><strong>{I18n.t('application.employmentContract.termsOfEmployment.title')}</strong></h4>
                    <p>
                        <strong>{I18n.t('application.employmentContract.termsOfEmployment.entryDate')}:</strong> <Localize value={ employee.termsOfEmployment.entryDate } dateFormat="date.long"/> <br/>
                        <strong>{I18n.t('application.employmentContract.termsOfEmployment.personnelNumber')}:</strong> { employee.termsOfEmployment.personnelNumber } <br/>
                        <strong>{I18n.t('application.employmentContract.termsOfEmployment.state')}:</strong> { employee.termsOfEmployment.state } <br/>
                        <strong>{I18n.t('application.employmentContract.termsOfEmployment.company')}:</strong> { employee.termsOfEmployment.company } <br/>
                        <strong>{I18n.t('application.employmentContract.termsOfEmployment.location')}:</strong> { employee.termsOfEmployment.location } <br/>
                        <strong>{I18n.t('application.employmentContract.termsOfEmployment.quittingDate')}:</strong> { employee.termsOfEmployment.quittingDate } <br/>
                    </p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <h4><strong>{I18n.t('application.employmentContract.bankAccount.title')}</strong></h4>
                    <p>
                        <strong>{I18n.t('application.employmentContract.bankAccount.accountHolder')}:</strong> { employee.bankAccount.accountHolder } <br/>
                        <strong>{I18n.t('application.employmentContract.bankAccount.bank')}:</strong> { employee.bankAccount.bank } <br/>
                        <strong>{I18n.t('application.employmentContract.bankAccount.iban')}:</strong> { employee.bankAccount.iban } <br/>
                        <strong>{I18n.t('application.employmentContract.bankAccount.bic')}:</strong> { employee.bankAccount.bic } <br/>
                    </p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <EmployeePaymentsTable employee={employee} />
                </div>
            </div>
        </div>
    );
}

EmployeeEmploymentContractData.propTypes = {
    employee: React.PropTypes.object.isRequired
};