/*
 * payments.js
 *
 * Copyright (c) 2016, Tobias Koltsch. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
sy the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/lgpl.txt>.
 */
var paymentDao = require('../../app_server/dao/payments-dao');

module.exports.createPayment = function(req, res) {
    if (req.params && req.params.employeeId && req.body) {
        paymentDao.createPayment(req.params.employeeId, req.body, function(err, createdPayment) {
            if (err) {
                sendJsonResponse(res, 400, err);
            } else {
                sendJsonResponse(res, 200, createdPayment);
            }
        });
    } else {
        sendJsonResponse(res, 400, {
            "message": "No employee was provided"
        });
    }
};

module.exports.findPayments = function(req, res) {
    if (req.params && req.params.employeeId) {
        paymentDao.findAllPaymentsForEmployeeId(req.params.employeeId, function(err, payments) {
            if (err) {
                sendJsonResponse(res, 404, err);
            } else {
                sendJsonResponse(res, 200, payments);
            }
        });
    } else {
        sendJsonResponse(res, 400, {
            "message": "No employeeId was provided"
        });
    }
};

module.exports.updatePayment = function(req, res) {
    if (req.params && req.params.employeeId && req.params.paymentId && req.body) {
        paymentDao.updatePayment(req.params.employeeId, req.params.paymentId, req.body, function(err, createdPayment) {
            if (err) {
                sendJsonResponse(res, 400, err);
            } else {
                sendJsonResponse(res, 200, createdPayment);
            }
        });
    } else {
        sendJsonResponse(res, 400, {
            "message": "No employee was provided"
        });
    }
};

module.exports.deletePayment = function(req, res) {
    if (req.params && req.params.employeeId && req.params.paymentId) {
        paymentDao.deletePayment(req.params.employeeId, req.params.paymentId, function(err, createdPayment) {
            if (err) {
                sendJsonResponse(res, 400, err);
            } else {
                sendJsonResponse(res, 200, createdPayment);
            }
        });
    } else {
        sendJsonResponse(res, 400, {
            "message": "No employee was provided"
        });
    }
};

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};