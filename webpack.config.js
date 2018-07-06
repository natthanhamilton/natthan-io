const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { GenerateSW } = require('workbox-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const DIST_DIR = path.resolve(__dirname, 'dist/app');
const APP_DIR = path.resolve(__dirname, 'src/app');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = env => {
  const isDev = env == 'development';

  return {
    mode: env,

    context: path.resolve(__dirname),
    entry: {
      main: APP_DIR + '/app.jsx',
      vendor: [
        'react',
        'react-dom',
        'prop-types',

        'react-router',
        'react-router-dom',

        'react-redux',
        'redux',
        'react-router-redux',

        '@material-ui/core',
        '@material-ui/icons',
        'cloudinary'
      ]
    },
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    output: {
      path: DIST_DIR,

      filename: 'js/[name].[hash:6].bundle.js',
      chunkFilename: 'js/[id].[chunkhash:6].chunk.js',

      sourceMapFilename: isDev ? 'js/[name].bundle.map' : 'js/[name].[chunkhash:6].bundle.map',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            presets: [
              [
                'env',
                {
                  modules: false
                }
              ],
              'stage-2',
              'react'
            ],
            plugins: ['react-hot-loader/babel']
          },
          exclude: [/node_modules/]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      modules: [APP_DIR, 'node_modules']
    },
    devServer: {
      contentBase: DIST_DIR,
      port: 8080,
      compress: true,
      publicPath: '/',

      historyApiFallback: true,
      stats: 'minimal'
    },
    plugins: [
      // Environment variables for the app
      new Dotenv(),

      // Inject the build environment
      new webpack.DefinePlugin({
        env: {
          NODE_ENV: isDev ? 'development' : 'production'
        }
      }),

      // Delete current build
      new CleanWebpackPlugin([BUILD_DIR]),

      // Move to Dist
      new CopyWebpackPlugin([
        {
          from: './src/index.html'
        },
        {
          from: './src/assets',
          to: './assets'
        },
        {
          from: './distAssets',
          to: '../'
        }
      ]),

      new HtmlWebpackPlugin({
        template: SRC_DIR + '/index.html'
      })
    ]

    /*
      new webpack.optimize.AggressiveMergingPlugin(),
      new CompressionPlugin( {
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      } ),
      new BrotliPlugin( {
        asset: '[path].br[query]',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      } ),
      new GenerateSW( {
        globDirectory: DIST_DIR,
        globPatterns: [ '**/
    /*.{html,js}' ],
              swDest: 'sw.js',
              clientsClaim: true,
              skipWaiting: true,
            } )
      */
  };
};
