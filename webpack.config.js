'use strict';

// Modules
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isProd = false;

module.exports = function makeWebpackConfig () {
    /**
     * Reference: http://webpack.github.io/docs/configuration.html
     */
    var config = {};

    /**
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * Separate build assets for the application and vendor files
     */
    config.entry = {
        app: './src/index.ts',
        vendor: ['angular', 'angular-route', 'jquery']
    };

    /**
     * Reference: http://webpack.github.io/docs/configuration.html#output
     */
    config.output = {
        // Absolute output directory
        path: __dirname + '/public',

        // Filename format for entry points (hash added in build mode)
        filename: 'app.bundle.js',
    };

  /**
   * Reference: http://webpack.github.io/docs/configuration.html#resolve-extensions
   */
  config.resolve = {
      extensions: ['', '.ts', '.js', '.json']
  }

    /**
     * Loaders
     * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
     * List: http://webpack.github.io/docs/list-of-loaders.html
     * This handles most of the magic responsible for converting modules
     */
    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts'],
            exclude: /node_modules/
        }, {
            // css-loader
            // Reference: https://github.com/webpack/css-loader
            // Allow loading css through js
            test: /\.css$/,
            // Reference: https://github.com/webpack/extract-text-webpack-plugin
            // Extract css files in production builds
            //
            // Reference: https://github.com/webpack/style-loader
            // Use style-loader in development.
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        }, {
            // asset-loader
            // Reference: https://github.com/webpack/file-loader
            // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
            // Rename the file using the asset hash
            // Pass along the updated reference to your code
            // You can add here any file extension you want to get copied to your output
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'file'
        }, {
            // html-loader
            // Reference: https://github.com/webpack/raw-loader
            // Allow loading html through js
            test: /\.html$/,
            loader: 'raw'
        }]
    };

    /**
     * Plugins
     * Reference: http://webpack.github.io/docs/configuration.html#plugins
     * List: http://webpack.github.io/docs/list-of-plugins.html
     */
    config.plugins = [];

    config.plugins.push(
        // Reference: https://github.com/ampedandwired/html-webpack-plugin
        // Render index.html with injected generated assets
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'head'
        }),

        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        // Extract css files
        // Disabled when not in build mode
        new ExtractTextPlugin('[name].[hash].css', {disable: !isProd}),

        // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
        // Minify all javascript, switch loaders to minimizing mode
        //new webpack.optimize.UglifyJsPlugin(),

        // Reference: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        // Generates an extra output file which contains common modules (vendor in this case)
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
    )

    return config;
}();