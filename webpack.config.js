const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: {
        index: './src/index.js',
        login: './src/login.js'
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
                test: /\.scss/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //打包好后，新建的html名字为first.html
            template: './src/temp/index.html', //以src下面的index.html为模板去创建新的html文件
            hash: true,
            chunks: ['index'],
            minify: true
        }), new HtmlWebpackPlugin({
            filename: 'login.html', //打包好后，新建的html名字为first.html
            template: './src/temp/login.html', //以src下面的index.html为模板去创建新的html文件
            hash: true,
            chunks: ['login'],
            minify: true
        })
    ]
};

module.exports = config;