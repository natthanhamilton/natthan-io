const express = require( 'express' )
const path = require( 'path' )
const compression = require( 'compression' )
const fs = require( 'fs' )
const expressStaticGzip = require( 'express-static-gzip' );

const port = process.env.PORT || 3000;
const app = express();
const APP_DIR = __dirname + '/app'

app.use( compression() )
app.get( '*.js', expressStaticGzip( APP_DIR, {
  urlContains: 'js/',
  fallthrough: false,
  enableBrotli: true,
} ) );

app.use( express.static( APP_DIR ) );

app.listen( port );