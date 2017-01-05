/*
 * Navbar.js
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
import history from '../../history'

import { I18n } from 'react-redux-i18n';

export default class Navbar extends React.Component {

    render() {
      const {routing} = this.props;
      const currentPathname = routing.location.pathname;

      return (
          <div className="masthead">
              <h3 className="text-muted">Project name</h3>
              <nav>
                  <ul className="nav nav-justified">
                      <li className={ currentPathname.endsWith('employees') ? 'active' : null } >
                          <a onClick={() => history.push('employees') }>
                              {I18n.t('navbar.employeeOverview')}
                          </a>
                      </li>
                      <li className={ currentPathname.endsWith('second') ? 'active' : null } >
                          <a onClick={() => history.push('second') }>
                              {I18n.t('navbar.testPage')}
                          </a>
                      </li>
                  </ul>
              </nav>
          </div>
      );
    }
}

Navbar.propTypes = {
    routing: React.PropTypes.object
};