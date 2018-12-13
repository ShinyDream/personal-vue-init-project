const webpackBaseCfg = require("./webpack.base");
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(webpackBaseCfg, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8081,
    host: 'localhost',
    historyApiFallback: true,
    clientLogLevel: 'warning',
    contentBase: false,
    publicPath: '/',
    open: true,
    hot: true,
    noInfo: true,
    inline: true,
    compress: true,
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/
    }
  }
})