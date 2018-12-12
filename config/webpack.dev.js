const webpackBaseCfg = require("./webpack.base");
const merge = require('webpack-merge');

module.exports = merge(webpackBaseCfg, {
  mode: 'development',
  devServer: {
    port: 8081,
    host: 'localhost',
    historyApiFallback: true,
    clientLogLevel: 'warning',
    contentBase: false,
    publicPath: '/',
    open: true,
    noInfo: true,
    inline: true,
    compress: true,
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/
    }
  }
})