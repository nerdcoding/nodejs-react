const path = require('path');


const BASE_DIR = path.resolve(__dirname, '..');
const BUILD_DIR = path.resolve(BASE_DIR, 'public/dist');
const APP_DIR = path.resolve(BASE_DIR, 'src');

const config = {
    BASE_DIR:  BASE_DIR,
    BUILD_DIR: BUILD_DIR,
    APP_DIR: APP_DIR,

    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/dist'
    },

    module : {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    devtool: 'source-map'
};
module.exports = config;