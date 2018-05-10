const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = () => {
  const mode = process.env.BUILD_MODE || 'development';

  const config = {
    mode,
    devtool: (mode === 'development') ? 'source-map' : 'none',
    entry: './public/js/index.jsx',
    output: {
      path: path.resolve('dist'),
      filename: 'index_bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        }, {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: [{
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader',
        },
      ],
    },
    plugins: [HtmlWebpackPluginConfig],
  };

  return config;
};
