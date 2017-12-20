const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: [
/*        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
/!*        'react-hot-loader/patch',*!/
/!*        'webpack-dev-server/client?http://localhost:8080/',
        'webpack/hot/only-dev-server',*!/
        './src/index.tsx'*/
        'react-hot-loader/patch', // activate HMR for React
        'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
        'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
        './src/index.tsx' // the entry point of our app
    ],
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        publicPath: '/static/',
        contentBase: '/'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                ],
            },
/*            {
                enforce: 'pre',
                test: /\.css$/,
                use: {
                    loader: 'typed-css-modules-loader',
                    options: {
                        camelCase: true
                    }
                },
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
            },*/
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    {
                        loader: 'react-hot-loader/webpack'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['transform-runtime']
                        }
                    },
                    {
                        loader: 'ts-loader',
                    },
                ]
            },
/*            {
                test: [/\.eot?$/,  /\.png$/,],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }
                ]
            },*/
/*            {
                test: [/\.woff?$/, /\.woff2?$/, /\.ttf?$/, /\.svg?$/,],
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },*/
/*            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            camelCase: true,
                            importLoaders: 1,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            },*/
/*            {
                test: /\.css$/,
                include: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }*/
        ]
    }
};

/*
const path = require('path');
module.exports = {
    entry: [
        './src/index.tsx'
    ],
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                include: [
                    path.resolve(__dirname, 'src'),
                ],
            },
            {
                enforce: 'pre',
                test: /\.css$/,
                use: {
                    loader: 'typed-css-modules-loader',
                    options: {
                        camelCase: true
                    }
                },
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['transform-runtime']
                        }
                    },
                    {
                        loader: 'ts-loader',
                    },
                ]
            },
            {
                test: [/\.eot?$/,  /\.png$/,],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
            {
                test: [/\.woff?$/, /\.woff2?$/, /\.ttf?$/, /\.svg?$/,],
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
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
                include: /node_modules/,
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
}*/
