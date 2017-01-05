/*
 * EmployeePrivateData.js
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

export default function EmployeePersonalData({employee}) {
    return (
            <div>
                <div className="row top-buffer">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <h3>{I18n.t('application.employee.title')}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <h4><strong>{I18n.t('application.employee.privateData')}</strong></h4>
                        <p>
                            <strong>{I18n.t('application.employee.firstName')}:</strong> { employee.firstName } <br/>
                            <strong>{I18n.t('application.employee.lastName')}:</strong> { employee.lastName } <br/>
                            <strong>{I18n.t('application.employee.gender')}:</strong> {I18n.t('application.employee.' + employee.gender)} <br/>
                            <strong>{I18n.t('application.employee.dayOfBirth')}:</strong> <Localize value={ employee.dayOfBirth } dateFormat="date.long"/> <br/>
                            <strong>{I18n.t('application.employee.nationality')}:</strong> { employee.nationality } <br/>
                            <strong>{I18n.t('application.employee.phoneNumber')}:</strong> { employee.phoneNumber } <br/>
                        </p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <h4><strong>{I18n.t('application.employee.address.title')}</strong></h4>
                        <p>
                            <strong>{I18n.t('application.employee.address.street')}:</strong> { employee.address.street } <br/>
                            <strong>{I18n.t('application.employee.address.houseNumber')}:</strong> { employee.address.houseNumber } <br/>
                            <strong>{I18n.t('application.employee.address.zipcode')}:</strong> { employee.address.postCode } <br/>
                            <strong>{I18n.t('application.employee.address.city')}:</strong> { employee.address.city } <br/>
                            <strong>{I18n.t('application.employee.address.state')}:</strong> { employee.address.state } <br/>
                            <strong>{I18n.t('application.employee.address.country')}:</strong> { employee.address.country } <br/>
                        </p>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <h4><strong>{I18n.t('application.employee.activeDirectory.title')}</strong></h4>
                        <p>
                            <strong>{I18n.t('application.employee.activeDirectory.userName')}:</strong> { employee.user.username} <br/>
                            <strong>{I18n.t('application.employee.activeDirectory.eMail')}:</strong> { employee.user.email} <br/>
                        </p>
                    </div>
                </div>
            </div>
    );
}

EmployeePersonalData.propTypes = {
    employee: React.PropTypes.object.isRequired
};