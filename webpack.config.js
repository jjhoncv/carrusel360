const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'Carrusel'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'lib')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      //   {
      //     enforce: 'pre',
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     loader: 'eslint-loader'
      //   },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new ExtractTextPlugin('css/[name].css')]
};
