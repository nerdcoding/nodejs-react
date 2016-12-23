/*
 * employees.js
 *
 * Copyright (c) 2016, Tobias Koltsch. All rights reserved.
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

var mongoose = require('mongoose');

var address = require('./address');
var bankAccount = require('./bankAccount');
var payment = require('./payment');
var termsOfEmployment = require('./termsOfEmployment');
var user = require('./user');

var employeeSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: true}, //(FEMALE|MALE)
    dayOfBirth: {type: Date, required: true},
    nationality: String,
    phoneNumber: String,
    imageBase64: String,
    address: address.addressSchema,
    bankAccount: bankAccount.bancAccountSchema,
    payments: [payment.paymentSchema],
    termsOfEmployment: termsOfEmployment.termsOfEmploymentSchema,
    user: {type: user.userSchema, required: true}
});

mongoose.model('Employee', employeeSchema);