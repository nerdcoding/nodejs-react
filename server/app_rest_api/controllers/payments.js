/*
 * payments.js
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

module.exports.createPayment = function(req, res) {
    console.log('createPayment');
    sendJsonResponse(res, 200, {
        "method": "createPayment",
        "employee parameter": req.params.employeeId
    });
};

module.exports.findPaymentById = function(req, res) {
    console.log('findPaymentById');
    sendJsonResponse(res, 200, {
        "method": "createPayment",
        "employee parameter": req.params.employeeId,
        "payment parameter": req.params.paymentId
    });
};

module.exports.updatePayment = function(req, res) {
    console.log('updatePayment');
    sendJsonResponse(res, 200, {
        "method": "updatePayment",
        "employee parameter": req.params.employeeId,
        "payment parameter": req.params.paymentId
    });
};

module.exports.deletePayment = function(req, res) {
    console.log('deletePayment');
    sendJsonResponse(res, 200, {
        "method": "deletePayment",
        "employee parameter": req.params.employeeId,
        "payment parameter": req.params.paymentId
    });
};

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};