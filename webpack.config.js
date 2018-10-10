const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        app: './src/js/app'
    },
    output: {
        path: path.resolve(__dirname, './static/assets'),
        filename: 'js/[name].js',
        publicPath: '/assets/'
    },
    mode: devMode ? 'development' : 'production',
    module: {
        rules: [
            {
                // JavaScript
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // SCSS
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                // Fonts
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                    }
                }
            },
            {
                // Images
                test: /\.(png|jpe?g|gif|svg|ico)(\?v=.+)?$/,
                exclude: /(\/fonts|webfonts)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }
            }
        ]
    },
    plugins: [
        // Extract CSS into its own file
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),

        // Start BrowserSync (used during development only)
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            files: ['public'],
            proxy: 'http://localhost:1313/'
        })
    ]
};