const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcPath = resolve(__dirname, '../../src');

module.exports = {
    context: srcPath,
    plugins: [
        new CheckerPlugin(),
        new StyleLintPlugin(),
        new HtmlWebpackPlugin({
            template: srcPath + '/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            resolve('./src'),
            resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['transform-runtime']
                        }
                    },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            useBabel: true,
                            useCache: true
                        }
                    }
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            hash: 'sha512',
                            digest: 'hex',
                            name: 'img/[hash].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            optipng: {
                                optimizationLevel: 7,
                            },
                            gifsicle: {
                                interlaced: false
                            }
                        }
                    }
                ],
            },
        ]
    }
};