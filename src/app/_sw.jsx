// TODO: Replace Xs.
importScripts( '/node_modules/workbox-sw/build/importScripts/workbox-sw.prod.v2.1.3.js' );

// Note: Ignore the error that Glitch raises about WorkboxSW being undefined.
const workbox = new WorkboxSW( {
  skipWaiting: true,
  clientsClaim: true
} );


workbox.router.registerRoute(
  new RegExp( '^https://hacker-news.firebaseio.com' ),
  workbox.strategies.staleWhileRevalidate()
);


self.addEventListener( 'push', ( event ) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil( self.registration.showNotification( title, options ) );
} );


workbox.precache( [] );