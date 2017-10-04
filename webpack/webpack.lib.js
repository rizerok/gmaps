const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    output:{
        library:'lib',
        libraryTarget:'umd',
        libraryExport: 'default'
    },
    devtool:'cheap-eval-source-map',
    plugins:[
        new CleanWebpackPlugin(
            ['dist'],
            {
                root:     path.resolve(),
                verbose:  true
            }
        )
    ]
};