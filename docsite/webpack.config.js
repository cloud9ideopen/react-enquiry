"use strict";

var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

var path = require("path");

var paths = [
    "/",
];

module.exports = {
    entry: {
        main: "./site/app.js",
    },
    
    resolve: {
        alias: {
          'react': path.join(__dirname, 'node_modules', 'react')
        },        
    },

    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        /* IMPORTANT!
         * You must compile to UMD or CommonJS
         * so it can be required in a Node context: */
        libraryTarget: 'umd'
    },

    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: "babel-loader",
            query: {
                presets: ["es2015", "react"]
            }
        }]
    },

    plugins: [
        new StaticSiteGeneratorPlugin('main', paths, {})
    ],
};