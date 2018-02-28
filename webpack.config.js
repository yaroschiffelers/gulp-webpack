/**
 * Webpack setup: stripped down version (only buldle .js assets)
 */
const webpack = require('webpack')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Jarvis = require("webpack-jarvis")

let config = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, './src/js/'),
        filename: 'bundle.js'
    },
    resolve: { // These options change how modules are resolved
        extensions: ['.js', '.jsx', '.json'], // Automatically resolve certain extensions
    },
    module: {
        rules: [
            { // Javascript files
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ] 
    },
    devtool: 'eval-source-map', // Enable devtools (better debugging)
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            warnings: true
        }),
        new Jarvis({
            port: 1337 // optional: set a port
        })
    ]
}

module.exports = config;

// NODE_ENV production setup 
// if (process.env.NODE_ENV === 'production') {
//     module.exports.plugins.push(
//         new webpack.optimize.UglifyJsPlugin(), // Call the Uglifyjs-webpack-plugin
//     );
// }
