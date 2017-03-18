const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src')
  },
  output: {
    filename: '[name].js'
  },
  resolve: {
    'extensions': ['.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')({
                    browsers: [
                      // These browsers support flexbox though IE10 and IE11's
                      // implementation is buggy.
                      // See: https://philipwalton.github.io/solved-by-flexbox/
                      'last 2 versions',
                      'chrome 21',
                      'firefox 28',
                      'safari 6.1',
                      'opera 17',
                      'edge 12',
                      'ie 10'
                    ]
                  })
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ]
};
