const express = require( 'express' )
const path = require( 'path' )
const compression = require( 'compression' )
const fs = require( 'fs' )
const expressStaticGzip = require( 'express-static-gzip' );

const port = process.env.PORT || 3000;
const app = express();
const APP_DIR = path.join( __dirname, './app' )

app.use( compression() )
app.get( '*.js', expressStaticGzip( APP_DIR, {
  urlContains: 'js/',
  fallthrough: false,
  enableBrotli: true,
} ) );

app.get( '/', function ( req, res ) {
  res.sendFile( path.join( __dirname, './app/index.html' ) );
} );

app.listen( port );