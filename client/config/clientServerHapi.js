/*
 * devServerHapi.js
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

const path = require('path');
const Server = require('hapi').Server;
const Webpack = require('webpack');
const WebpackPlugin = require('hapi-webpack-plugin');
const webpackCommonConfig = require('./webpack.config');
const webpackDevConfig = require('./webpack.config.dev');
const Inert = require('inert');

// Create static HTTP server at port 3000 serving the public/ directory.
const server = new Server();
server.connection({port: 3000});
server.register(Inert, () => {});
server.route({
    method: 'GET',
    path:
        '/{param*}',
    handler: {
        directory: {
            path: path.join(webpackCommonConfig.BASE_DIR, 'public')
        }
    }
});

// The 'onPreResponse' handler intercepts HTTP 404 erros and redirects to the index.html
server.ext('onPreResponse', (request, reply) => {
    if (request.response.isBoom
        && request.response.output.statusCode === 404) {
        return reply.file(
            path.join(webpackCommonConfig.BASE_DIR, 'public/index.html')
        );
    }
    return reply.continue();
});

// Create Webpack Development Server based on 'webpack.config.dev.js'.
const compiler = new Webpack(webpackDevConfig);
const assets = {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
};
const hot = {};
server.register(
    {
        register: WebpackPlugin,
        options: {compiler, assets, hot}
    },
error => {
        if (error) {
            return console.error(error);
        }
        server.start(
            () => console.log('Server running at:', server.info.uri)
        );
    }
);