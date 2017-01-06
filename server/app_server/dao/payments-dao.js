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

// TODO Each time callback(err) is called a correct HTTP status code and a error message needs to be provided for the calling controller.

module.exports.findAllPaymentsForEmployeeId = function(employeeId, callback) {
    Employee
        .findById(employeeId)
        .select('payments')
        .exec(function(err, employee) {
            if (err) {
                callback(err);
            } else if (employee) {
                callback("", employee.payments);
            } else {
                callback(err);
            }
        });
};

module.exports.createPayment = function(employeeId, payment, callback) {
    Employee
        .findById(employeeId)
        .exec(function(err, employee) {
            if (err) {
                callback(err);
            } else if (employee) {
                employee.payments.push({
                    salary: payment.salary,
                    validFrom: payment.validFrom,
                    weeklyWorkingHours: payment.weeklyWorkingHours
                });
                employee.save(function(err, employee) {
                    if (err) {
                        callback(err);
                    } else {
                        const newPayment = employee.payments[employee.payments.length - 1];
                        callback("", newPayment);
                    }
                });
            } else {
                callback(err);
            }
        });
};

module.exports.updatePayment = function(employeeId, paymentId, payment, callback) {
    Employee
        .findById(employeeId)
        .exec(function(err, employee) {
            if (err) {
                callback(err);
            } else if (employee) {
                const paymentToUpdate = employee.payments.id(paymentId);
                if (paymentToUpdate) {
                    paymentToUpdate.salary = payment.salary;
                    paymentToUpdate.validFrom = payment.validFrom;
                    paymentToUpdate.weeklyWorkingHours = payment.weeklyWorkingHours;
                    employee.save(function(err, employee) {
                        if (err) {
                            callback(err);
                        } else {
                            callback("", paymentToUpdate);
                        }
                    });
                } else {
                    callback(err);
                }
            } else {
                callback(err);
            }
        });
};

module.exports.deletePayment = function(employeeId, paymentId, callback) {
    Employee
        .findById(employeeId)
        .exec(function(err, employee) {
            if (err) {
                callback(err);
            } else if (employee) {
                if (employee.payments.id(paymentId)) {
                    let paymentToRemove = employee.payments.id(paymentId);
                    employee.payments.id(paymentId).remove();
                    employee.save(function(err, employee) {
                        if (err) {
                            callback(err);
                        } else {
                            callback("", paymentToRemove);
                        }
                    });
                } else {
                    callback(err);
                }
            } else {
                callback(err);
            }
        });
};
