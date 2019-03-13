const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');

const config = {
    entry: {
        index: './src/index.js',
        login: './src/login.js',
        sigup: './src/sigup.js',
        change: './src/change.js',
        query: './src/query.js'
    },
    output: {
        filename: 'assets/[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist")
    },
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../../'
                    }
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }, {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../'
                        }
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/media/[hash].[ext]'
                }
            }, {
                test: require.resolve('jquery'), //require.resolve 用来获取模块的绝对路径
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //打包好后，新建的html名字为first.html
            template: './src/temp/index.html', //以src下面的index.html为模板去创建新的html文件
            hash: true,
            chunks: ['index'],
            minify: {
                removeComments: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true
            }
        }), new HtmlWebpackPlugin({
            filename: 'login.html', //打包好后，新建的html名字为first.html
            template: './src/temp/login.html', //以src下面的index.html为模板去创建新的html文件
            hash: true,
            chunks: ['login'],
            minify: {
                removeComments: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true
            }
        }), new HtmlWebpackPlugin({
            filename: 'sigup.html', //打包好后，新建的html名字为first.html
            template: './src/temp/sigup.html', //以src下面的index.html为模板去创建新的html文件
            hash: true,
            chunks: ['sigup'],
            minify: {
                removeComments: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true
            }
        }), new HtmlWebpackPlugin({
            filename: 'change.html', //打包好后，新建的html名字为first.html
            template: './src/temp/change.html', //以src下面的index.html为模板去创建新的html文件
            hash: true,
            chunks: ['change'],
            minify: {
                removeComments: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true
            }
        }), new HtmlWebpackPlugin({
            filename: 'query.html', //打包好后，新建的html名字为first.html
            template: './src/temp/query.html', //以src下面的index.html为模板去创建新的html文件
            hash: true,
            chunks: ['query'],
            minify: {
                removeComments: true,
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[hash].css',
            chunkFilename: 'assets/css/[id].[hash].css',
        }),
        new OptimizeCssAssetsPlugin()
    ]
};

module.exports = config;