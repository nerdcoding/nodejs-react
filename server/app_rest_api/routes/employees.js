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

var express = require('express');
var router = express.Router();

var employeeController = require('../controllers/employees');
var paymentsController = require('../controllers/payments');

// employees
router.post('/employees', employeeController.createEmployee);
router.get('/employees', employeeController.findAllEmployees);
router.get('/employees/:employeeId', employeeController.findEmployeeById);
router.put('/employees/:employeeId', employeeController.updateEmployee);
router.delete('/employees/:employeeId', employeeController.deleteEmployee);

// payments
router.post('/employees/:employeeId/payments', paymentsController.createPayment);
router.get('/employees/:employeeId/payments/:paymentId', paymentsController.findPaymentById);
router.put('/employees/:employeeId/payments/:paymentId', paymentsController.updatePayment);
router.delete('/employees/:employeeId/payments/:paymentId', paymentsController.deletePayment);

module.exports = router;