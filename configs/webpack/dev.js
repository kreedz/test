const merge = require('webpack-merge');
const webpack = require('webpack');
const commonCfg = require('./common');

module.exports = merge(commonCfg, {
    entry: [
        'react-hot-loader/patch',
        './index.tsx'
    ],
    devServer: {
        hot: true,
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
});
