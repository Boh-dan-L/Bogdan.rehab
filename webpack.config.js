const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
    mode: mode,
    entry: {
        scripts: './src/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
            watch: true
        },
        port: 8080,
        open: true,
        static: {
            directory: './src',
            watch: true
        }
    },
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //         from: 'dist/_redirects',
        //         to: '.',
        //         },
        //     ],
        // }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })],
    module: {
        rules: [
            {
            test: /\.html$/i,
            loader: "html-loader",
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "video"
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
}
