const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let pathsToClean = [
    'dist'
];

const config = {
    entry: "./src/App.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.css$/, use: [
                'style-loader',
                'css-loader'
            ]}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({title: 'Jesse Franceschini'})
    ]
};

module.exports = config;