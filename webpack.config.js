const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin")
const Dotenv = require('dotenv-webpack');

const srcRoot = path.resolve(__dirname, 'src');
const appRoot = path.resolve(srcRoot, 'app');
var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src/app');
module.exports = (env) => {
  const isDev = env == 'dev';
  return {
    context: path.resolve(__dirname),
    entry: {
      main: APP_DIR + '/app.jsx'
    },
    node: {
      // console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    output: {
      path: BUILD_DIR,
      filename: isDev ? 'js/[name].bundle.js' : 'js/[name].[hash:6].bundle.js',
      sourceMapFilename: isDev ? 'js/[name].bundle.map' : 'js/[name].[chunkhash:6].bundle.map',
      chunkFilename: isDev ? 'js/[id].chunk.js' : 'js/[id].[chunkhash:6].chunk.js',
      publicPath: '/'
    },
    module: {
      rules: [
      {
        test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
        loader: 'babel-loader',
        query: {
          "presets": [
            ["env", {
              modules: false
            }], "stage-2", "react"
          ],
          "plugins": ["react-hot-loader/babel"]
        },
        exclude: [/node_modules/]
      }, {
        test: /\.json$/,
        loader: "json-loader"
      }, {
        test: /\.(css|sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader'
        })
      }]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [appRoot, 'node_modules']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: BUILD_DIR,
      port: 3300,
      compress: true,
      publicPath: '/',
      stats: "minimal"
    },
    stats: "minimal",
    performance: {
      hints: false
    },
    devtool: false,
    plugins: [
      // Environment variables for the app
      new Dotenv(),
      // Inject the build environment
      new webpack.DefinePlugin({
        env: {
          NODE_ENV: isDev ? 'development' : 'production'
        },
      }),
      // Delete current build
      new CleanWebpackPlugin(['dist']),
      // Build CSS
      new ExtractTextPlugin({
        filename: 'style-[hash:6].css',
        allChunks: true
      }),
      // Move to Dist
      new CopyWebpackPlugin([
      {
        from: './src/index.html'
      }, {
        from: './src/assets',
        to: './assets'
      }]),
      new HtmlWebpackPlugin({
        template: path.resolve(srcRoot, 'index.html'),
        chunksSortMode: 'dependency'
      }),
      /*
      // Optimize the build
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'js/[hash:6].vendor.js',
        minChunks: Infinity
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
      */
    ]
  }
};
