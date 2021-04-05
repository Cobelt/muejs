import HtmlWebPackPlugin from 'html-webpack-plugin'
import CopyWebPackPlugin from 'copy-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

import webpack from 'webpack'

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        inline: false,
        host: '0.0.0.0',
        port: 3006,
        public: 'localhost:3006',

        hot: true,

        contentBase: './dist',

        historyApiFallback: true,
        disableHostCheck: true,
        allowedHosts: ['muejs', 'localhost']
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: true,
        ignored: ['node_modules', './**/components']
    },

    entry: {
        app: './src/app.js'
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: [
                    process.env.NODE_ENV === 'development'
                        ? 'style-loader'
                        : {
                              loader: MiniCssExtractPlugin.loader,
                              options: {
                                  hmr: process.env.NODE_ENV === 'development',
                                  reloadAll: true
                              }
                          },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebPackPlugin({ patterns: [{ from: './src/app.js' }] }),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].css' })
    ]
}