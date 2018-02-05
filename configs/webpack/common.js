const webpack = require('webpack');
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = resolve(__dirname, '../../');
const srcPath = resolve(rootPath, 'src');
const nodeModulesPath = resolve(rootPath, 'node_modules');

module.exports = {
    context: srcPath,
    plugins: [
        new CheckerPlugin(),
        new StyleLintPlugin(),
        new HtmlWebpackPlugin({
            template: srcPath + '/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/
        ]),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            srcPath,
            nodeModulesPath
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
                test: /\.(jpe?g|png|gif|svg|eot)$/i,
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
            {
                test: [/\.woff?$/, /\.woff2?$/, /\.ttf?$/],
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                include: srcPath,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            hmr: true
                        }
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            namedExport: true,
                            sourceMap: true,
                            modules: true,
                            camelCase: true,
                            importLoaders: 1,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: nodeModulesPath,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    }
};