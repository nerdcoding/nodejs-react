/*
 * employee.js
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
var Employee = mongoose.model('Employee');

module.exports.findAllEmployees = function(callback) {
    Employee
        .find({})
        .select('-payments -termsOfEmployment -bankAccount -address')
        .exec(function(err, employees) {
            if (err) {
                callback(err);
            } else {
                callback("", employees);
            }
        });
};

module.exports.findEmployeeById = function(employeeId, callback) {
    Employee
        .findById(employeeId)
        .select('-payments')
        .exec(function(err, employee) {
            if (err) {
                callback(err);
            } else {
                callback("", employee);
            }
        });
};

module.exports.createEmployee = function(employee, callback) {
    Employee
        .create(employee, function(err, createdEmployee) {
            if (err) {
                callback(err);
            } else {
                callback("", createdEmployee);
            }
        });
};

module.exports.updateEmployee = function(employeeId, updatedEmployee, callback) {
    module.exports.findEmployeeById(employeeId, function(err, employeeToUpdate) {
        if (err) {
            callback(err);
        } else {
            employeeToUpdate.firstName = updatedEmployee.firstName;
            // TODO update all other fields

            employeeToUpdate.save(function(err, savedEmployee) {
                if (err) {
                    callback(err);
                } else {
                    callback("", savedEmployee);
                }
            });
        }
    });
};

module.exports.deleteEmployee = function(employeeId, callback) {
    Employee
        .findByIdAndRemove(employeeId)
        .exec(function(err, employee) {
            if (err) {
                callback(err);
            } else {
                callback("", employee);
            }
        });
};