const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin =  require('html-webpack-plugin');

const distPath = path.resolve(__dirname, '../dist');
const srcPath = path.resolve(__dirname, '../src');

module.exports = {
  mode: 'production',
  entry: {
    home: "@/main.js"
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      minChunks: 1
    }
  },
  output: {
    path: distPath,
    filename: path.posix.join("js", "[id]-[hash:8].js"),
    chunkFilename: path.posix.join("js", "[id]-chunk-[hash:8].js"),
    publicPath: "./"
  },
  devtool: '#cheap-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    alias: {
      "@": srcPath,
      vue: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      }
    }),
    new ExtractTextPlugin({
      filename: path.posix.join('css', '[name]-[hash].css'),
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]_[hash:base64:8]'
          }
        }]
      },
      {
        test: /\.s(c|a)ss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
          test: /.woff|.woff2|.svg|.eot|.ttf/,
          exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            filename: '[name].[ext]'
          }
      }
    ]
  },
  performance: {
    hints: false
  }
};