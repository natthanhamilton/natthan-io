const path = require( 'path' );
const webpack = require( 'webpack' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const CompressionPlugin = require( "compression-webpack-plugin" )
const Dotenv = require( 'dotenv-webpack' );
const {
  GenerateSW
} = require( 'workbox-webpack-plugin' );
const BrotliPlugin = require( 'brotli-webpack-plugin' );

const BUILD_DIR = path.resolve( __dirname, 'dist' );
const DIST_DIR = path.resolve( __dirname, 'dist/app' );
const APP_DIR = path.resolve( __dirname, 'src/app' );
const SRC_DIR = path.resolve( __dirname, 'src' );

module.exports = ( env ) => {
  const isDev = env == 'development';

  return {
    mode: env,
    //mode: 'production',

    context: path.resolve( __dirname ),
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

        'material-ui',
        'material-ui-icons',
        'cloudinary'
       ]
    },
    // Needed for dependencies
    node: {
      // console: true,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    output: {
      path: DIST_DIR,
      //filename: isDev ? 'js/[name].bundle.js' : 'js/[name].[hash:6].bundle.js',
      //chunkFilename: isDev ? 'js/[id].chunk.js' : 'js/[id].[chunkhash:6].chunk.js',

      filename: 'js/[name].[hash:6].bundle.js',
      chunkFilename: 'js/[id].[chunkhash:6].chunk.js',

      sourceMapFilename: isDev ? 'js/[name].bundle.map' : 'js/[name].[chunkhash:6].bundle.map',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
          loader: 'babel-loader',
          query: {
            "presets": [
            [ "env", {
                modules: false
            } ], "stage-2", "react"
          ],
            "plugins": [ "react-hot-loader/babel" ]
          },
          exclude: [ /node_modules/ ]
      }

      /*, {
          test: /\.(css|sass|scss)$/,
          use: ExtractTextPlugin.extract( {
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'
          } )
        }
      */
     ]
    },
    resolve: {
      extensions: [ '.js', '.jsx', '.json' ],
      modules: [ APP_DIR, 'node_modules' ]
    },
    devServer: {
      contentBase: DIST_DIR,
      port: 8080,
      compress: true,
      publicPath: '/',

      historyApiFallback: true,
      //contentBase: path.join(__dirname, "dist"),
      stats: "minimal"
    },
    devtool: "cheap-module-source-map",
    performance: {
      hints: "warning",
      maxAssetSize: 200000,
      maxEntrypointSize: 400000
    },
    //externals: ["react"],
    stats: "errors-only",
    plugins: [
      // Environment variables for the app
      new Dotenv(),

      // Inject the build environment
      new webpack.DefinePlugin( {
        env: {
          NODE_ENV: isDev ? 'development' : 'production'
        },
      } ),

      // Delete current build
      new CleanWebpackPlugin( [ BUILD_DIR ] ),

      /*
      // Build CSS
      new ExtractTextPlugin( {
        filename: 'style-[hash:6].css',
        allChunks: true
      } ),
      */

      // Move to Dist
      new CopyWebpackPlugin( [
        {
          from: './src/index.html'
      }, {
          from: './src/assets',
          to: './assets'
      }, {
          from: './server',
          to: '../'
      }, {
          from: './manifest.json',
          to: './'
      } ] ),

      new HtmlWebpackPlugin( {
        template: SRC_DIR + '/index.html'
      } ),
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
*/
      new GenerateSW( {
        globDirectory: DIST_DIR,
        globPatterns: [ '**/*.{html,js}' ],
        swDest: 'sw.js',
        clientsClaim: true,
        skipWaiting: true,
      } )
    ]
  }
};