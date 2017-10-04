const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let extractStylus = new ExtractTextPlugin({
    filename:'[name].css'
});

module.exports = {
    entry:{
        lib:path.resolve('source','lib','lib.js')
    },
    output:{
        filename:'[name].js',
        path:path.resolve('dist')
    },
    resolve:{
        alias:{
            root:path.resolve(),
            dist:path.resolve('dist'),
            lib:path.resolve('source','lib'),
            style:path.resolve('source','style'),
            dev:path.resolve('dev','source')
        }
    },
    module:{
        rules:[
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'eslint-loader',
                include: [
                    path.resolve('source', 'lib'),
                    path.resolve('dev', 'source')
                ]
            },
            {
                test:/\.js$/,
                include:path.resolve('source','lib'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            'env'//https://babeljs.io/docs/plugins/preset-env/
                        ],
                        cacheDirectory:true
                    }
                }
            },
            {
                test:/\.styl$/,
                use:extractStylus.extract({
                    fallback: "style-loader",
                    use:[{
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options:{
                                sourceMap: true
                            }
                        },
                        {
                            loader:'stylus-loader'
                        }]
                })
            }
        ]
    },
    devServer:{
        port:3000,
        open:true
    },
    plugins:[
        extractStylus
    ]
};