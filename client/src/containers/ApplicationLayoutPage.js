/*
 * ApplicationLayout.js
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
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ApplicationLayoutPage extends React.Component {

    render() {
        const { routing, children } = this.props;
        return (
            <div>
                <div className="container">
                    <Navbar routing={routing} />
                </div>
                <div className="container top-buffer">
                    {children}
                </div>
                <Footer />
            </div>
        );
    }
}

ApplicationLayoutPage.propTypes = {
    children: React.PropTypes.element.isRequired,
    routing: React.PropTypes.object
};

import * as Actions from '../actions';
function mapStateToProps(state) {
    return {
        routing: state.routing
    };
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationLayoutPage);


