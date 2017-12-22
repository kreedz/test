const webpack = require('webpack');
const merge = require('webpack-merge');
const {resolve} = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const commonCfg = require('./common');

module.exports = merge(commonCfg, {
    entry: './index.tsx',
    output: {
        filename: 'js/bundle.[hash].min.js',
        path: resolve(__dirname, '../../dist'),
        publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
});
