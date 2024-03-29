/*
 * @Desc: 页面、组件说明
 * @Date: 2019-06-03 14:39:02
 * @query: {string} p1  内容ID
 * @props: {string} p1  数据源
 * @event: {string} p1  des
 */
const
    path = require('path');
// utils = require('./utils');

module.exports = {
    //设置入口文件
    entry: {
        client: ['./src/vue/main.js'],
    },
    //出口文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    // postcss: [
                    //     require('autoprefixer')({
                    //         browsers: ['last 2 versions']
                    //     })
                    // ]
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, '../src')],
                exclude: /node_modules/,
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         name: 'img/[name].[hash:7].[ext]'
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         name: 'font/[name].[hash:7].[ext]'
            //     }
            // },
            // {
            //     test: /\.(mp3|mp4)(\?.*)?$/,
            //     loader: 'file-loader',
            //     query: {
            //         name: 'media/[name].[ext]'
            //     }
            // },
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            //精准匹配，使用vue来替代vue/dist/vue.esm.js路径
            // 'vue$': 'vue/dist/vue.esm.js',
            // //使用@替代src路径，当你引入src下的文件是可以使用import xx from "@/XX.js"
            // '@': path.resolve(__dirname, '../src'),
            // 'asset': path.resolve(__dirname, '../src/asset'),
            // '_': path.resolve(__dirname, '../node_modules')
        }
    },
    mode: 'none'
};