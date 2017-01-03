/*
 * FilterLink.js
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
import Link from '../components/Link';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
}

import {setVisibilityFilter} from '../actions';
function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);


/*import * as Actions from '../actions';
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}*/
