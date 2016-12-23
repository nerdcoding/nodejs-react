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

var employeeDao = require('../../app_server/dao/employee-dao');

module.exports.createEmployee = function(req, res) {
    console.log('createEmployee');
    sendJsonResponse(res, 200, {
        "method": "createEmployee",
        "parameter": ""
    });
};

module.exports.findAllEmployees = function(req, res) {
    employeeDao.findAllEmployees(function(err, employees) {
        if (err) {
            sendJsonResponse(res, 404, err);
        } else {
            sendJsonResponse(res, 200, employees);
        }
    });
};

module.exports.findEmployeeById = function(req, res) {
    console.log('findEmployeeById');
    sendJsonResponse(res, 200, {
        "method": "findEmployeeById",
        "parameter": req.params.employeeId
    });
};

module.exports.updateEmployee = function(req, res) {
    console.log('updateEmployee');
    sendJsonResponse(res, 200, {
        "method": "updateEmployee",
        "parameter": req.params.employeeId
    });
};

module.exports.deleteEmployee = function(req, res) {
    console.log('deleteEmployee');
    sendJsonResponse(res, 200, {
        "method": "deleteEmployee",
        "parameter": req.params.employeeId
    });
};

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};