const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports =  {
    devtool: 'source-map',
    mode: 'development',//production development
    entry: [
        './src/jsx/index.jsx',
        './src/scss/base.scss'
    ],
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            {
				test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].css',
							outputPath: 'css/'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader'
					},

					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
            {
                test: /\.(jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react'],
                            cacheDirectory: true,
                            env: 'development'
                        }
                    }
                ]
            },
        ],
    },
    /*
    plugins: [

    ],

    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            exclude: /(node_modules|bower_components)/,
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    }
    */

};
