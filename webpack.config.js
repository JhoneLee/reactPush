/*
* @Author: liyunjiao
* @Date:   2017-06-06 12:27:36
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-06 16:17:57
*/
var path = require('path');
module.exports = {
    entry: './main.js', // 入口文件路径
    output: {
        path: path.join(__dirname,'build'),
        filename:'main.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }
        ]
    }
}