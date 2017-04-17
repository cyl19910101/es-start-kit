process.env.NODE_ENV = 'production';

var fs      = require ( 'fs-extra' );
var config  = require ( './webpack.config' );
var paths   = require ( './paths' );
var webpack = require ( 'webpack' );

fs.emptyDirSync ( paths.dist );

// Note : if need a cleaning build folder, remove the 'fs.emptyDirSync' and do the following in the future
// 1. create a folder named 'building' for the build progress
// 2. after finished the build progress, rm the 'build.old' if needed
// 3. mv the 'build' folder to 'build.old'
// 4. mv the 'building' folder to 'build'

webpack ( config ).run ( ( err, stats ) => {
  err && console.error ( err );
} );
