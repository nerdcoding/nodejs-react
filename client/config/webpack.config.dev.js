const webpack = require('webpack');
const webpackCommonConfig = require('./webpack.config.js');

const devConfig = Object.assign({}, webpackCommonConfig, {
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        webpackCommonConfig.APP_DIR + '/app.js',
    ],
    pulgins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
});

module.exports = devConfig;
