var path  = require ( 'path' );
var fs    = require ( 'fs' );
var _root = fs.realpathSync ( process.cwd () );

function resolvePath ( relativePath ) {
  return path.resolve ( _root, relativePath );
}

var nodePaths = (process.env.NODE_PATH || '')
  .split ( process.platform === 'win32' ? ';' : ':' )
  .filter ( Boolean )
  .filter ( folder => !path.isAbsolute ( folder ) )
  .map ( resolvePath );

function resolveOwn ( relativePath ) {
  return path.resolve ( __dirname, relativePath );
}

module.exports = {
  root           : _root,
  polyfills      : resolveOwn ( 'polyfills' ),
  dist           : resolvePath ( 'dist' ),
  entry          : resolvePath ( 'src/entry.js' ),
  packageJson    : resolvePath ( 'package.json' ),
  src            : resolvePath ( 'src' ),
  ownNodeModules : resolveOwn ( 'node_modules' ),
  appNodeModules : resolvePath ( 'node_modules' ),
  nodePaths      : nodePaths,
};
