/*
 * store.js
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

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';

import history from '../history';
import reducer from '../reducers';

export default function configureStore(initialState) {
    const reduxRouterMiddleware = syncHistory(history);
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(thunk, reduxRouterMiddleware),
    );
    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(loadI18nTransaltions()));
    store.dispatch(setLocale('en'));

    return store;
}

function loadI18nTransaltions() {
    return {
        en: {
            "application": {
                "title": "Employee management application"
            }
        },
        de: {
            "application": {
                "title": "Applikation zur Mitarbeiterverwaltung"
            }
        }
    }
}