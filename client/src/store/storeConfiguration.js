/*
 * storeConfiguration.js
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
    store.dispatch(setLocale('de'));

    return store;
}

function loadI18nTransaltions() {
    return {
        en: {
            "application": {
                "title": "Employee management application",
                "employee": {
                    "title": "Employee Overview",
                    "privateData": "Private data",
                    "firstName": "First name",
                    "lastName": "Last name",
                    "gender": "Gender",
                    "dayOfBirth": "Day of birth",
                    "nationality": "Nationality",
                    "phoneNumber": "Phone number",
                    "address": {
                        "title": "Address",
                        "street": "Street",
                        "houseNumber": "House number",
                        "zipcode": "Zipcode",
                        "city": "City",
                        "state": "State",
                        "country": "Country"
                    },
                    "activeDirectory": {
                        "title": "Active directory",
                        "userName": "User name",
                        "eMail": "E-mail"
                    },
                    "FEMALE": "Female",
                    "MALE": "Male"
                },
                "employmentContract": {
                    "title": "Employment contract",
                    "termsOfEmployment": {
                        "title": "Terms of employment",
                        "entryDate": "Entry date",
                        "personnelNumber": "Personnel number",
                        "state": "State",
                        "company": "Company",
                        "location": "Location",
                        "quittingDate": "Quitting date"
                    },
                    "bankAccount": {
                        "title": "Bank account",
                        "accountHolder": "Account holder",
                        "bank": "Bank",
                        "iban": "IBAN",
                        "bic": "BIC"
                    },
                    "payment": {
                        "title": "Payments",
                        "salary": "Salery",
                        "validFrom": "Valid from",
                        "weeklyWorkingHours": "Weekly working hours"
                    }
                }
            },
            date: {
                long: 'MMM DD, YYYY'
            }
        },
        de: {
            "application": {
                "title": "Applikation zur Mitarbeiterverwaltung",
                "employee": {
                    "title": "Mitarbeiterübersicht",
                    "privateData": "Persönliche Daten",
                    "firstName": "Vorname",
                    "lastName": "Nachname",
                    "gender": "Geschlecht",
                    "dayOfBirth": "Geburtstag",
                    "nationality": "Staatsangehörigkeit",
                    "phoneNumber": "Telefonnummer",
                    "address": {
                        "title": "Anschrift",
                        "street": "Straße",
                        "houseNumber": "Hausnummer",
                        "zipcode": "Postleitzahl",
                        "city": "Stadt",
                        "state": "Bundesland",
                        "country": "Land"
                    },
                    "activeDirectory": {
                        "title": "Active directory",
                        "userName": "Nutzername",
                        "eMail": "E-Mail"
                    },
                    "FEMALE": "Weiblich",
                    "MALE": "Männlich"
                },
                "employmentContract": {
                    "title": "Anstellungsvertrag",
                    "termsOfEmployment": {
                        "title": "Anstellungsverhältnis",
                        "entryDate": "Eintrittsdatum",
                        "personnelNumber": "Personalnummer",
                        "state": "Status",
                        "company": "Firma",
                        "location": "Standort",
                        "quittingDate": "Austrittsdatum"
                    },
                    "bankAccount": {
                        "title": "Bankverbindung",
                        "accountHolder": "Kontoinhaber",
                        "bank": "Bank",
                        "iban": "IBAN",
                        "bic": "BIC"
                    },
                    "payment": {
                        "title": "Vergütung",
                        "salary": "Gehalt",
                        "validFrom": "Gültig ab",
                        "weeklyWorkingHours": "Wochenstunden"
                    }
                }
            },
            date: {
                long: 'D MMM YYYY'
            }
        }
    }
}