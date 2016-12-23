/*
 * db.js
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
var dbUri = 'mongodb://127.0.0.1/empDB';
console.log('dbUri: ' + dbUri);

// connect to database
mongoose.connect(dbUri);


// listen for some mongoose events
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to: ' + dbUri);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected from: ' + dbUri);
});

// disconnect from database during application shutdown
// for nodemon restarts
process.once('SIGUSR2', function() {
    gracefullyShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// for app termination
process.on('SIGINT', function() {
    gracefullyShutdown('app termination', function() {
        process.exit(0);
    });
});
// for heroku termination
process.on('SIGTERM', function() {
    gracefullyShutdown('Heroku app shutdown', function() {
        process.exit(0);
    });
});
var gracefullyShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    })
};

require('./employee/employee');