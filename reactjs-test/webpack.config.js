const path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    entry: path.resolve(__dirname, "app.js"), // string | object | array

    output: {
        path: path.resolve(__dirname, "./build/js"), // string
        filename: "app.js", // string
    },
    devtool: 'source-map',
    // devServer: {
    //     contentBase: "./node_modules/weui/src/example/index.html",
    //     historyApiFallback: true,//不跳转
    //     inline: true//实时刷新
    // },
    module: {//模块加载器配置
        rules: [
            {
                test: /\.js?$/,
                exclude: [
                    path.resolve(__dirname, "node_moudules")
                ],
                loader: 'babel-loader',
                options:{
                    "presets": [
                        "es2015",
                        "react",
                        "stage-3"
                    ],
                    "plugins": [["import", { "libraryName": "antd", "style": "css" }]]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|ttf|woff|woff2|eot|svg|dtd)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ]
        // loaders: [{
        //     test: /\.less$/,//正则匹配拓展名为···的文件
        //     include: path.join(__dirname, './src/less'),//需要被加载文件的路径
        //     loader: 'style-loader!css-loader!less-loader'
        // }, {
        //     test: /\.html$/,
        //     exclude: /node_modules/,//这个文件除外
        //     loader: 'html-loader'
        // }, {
        //     test: /\.js?$/,
        //     loader: 'babel-loader',
        //     exclude: /node_modules/,//这个文件除外
        // }, {
        //     test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //     loader: 'url-loader?limit=10000&minetype=srclication/font-woff'
        // }, {
        //     test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        //     loader: 'file-loader'
        // }, {
        //     test: /\.(png|jpg)$/,
        //     loader: 'url-loader?limit=8192' // 内联的base64的图片地址，图片要小于8k，直接的url的地址则不解析
        // }]
    },
    plugins: [
        //单独生成html文件
        // new HtmlWebpackPlugin({
        //     filename: '../index.html',//生成的html及存放路径，相对于path
        //     template: './src/index.html',//载入文件及路径
        //     publicPath: "js",//这是build文件下html文件引用js文件的路径
        //     //chunks: ['index'],//需要引入的chunk，不配置就会引入所有页面的资源
        // }),
        // 使用browser-sync实时刷新页面
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {baseDir: ['./build/']},//会默认访问./build/index.html
        })
    ]
};