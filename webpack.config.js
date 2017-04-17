'use strict';
process.noDeprecation = true;
var webpack           = require ( 'webpack' );
var paths             = require ( './paths' );

module.exports = {
  bail          : true,
  devtool       : 'source-map',
  entry         : [ paths.polyfills, paths.entry ],
  output        : {
    path          : paths.dist,
    filename      : '[name].[chunkhash:8].js',
    chunkFilename : '[name].[chunkhash:8].chunk.js',
    publicPath    : '/'
  },
  resolve       : {
    extensions : [ '.js', '.json' ]
  },
  resolveLoader : {
    modules : [
      paths.ownNodeModules,
      paths.appNodeModules,
    ],
  },
  module        : {
    rules : [
      { parser : { requireEnsure : false } },
      {
        test    : /\.js$/,
        include : paths.src,
        use     : {
          loader  : 'babel-loader',
          options : {
            babelrc : false,
            presets : [
              [
                require.resolve ( 'babel-preset-es2015' ),
                {
                  modules : false
                }
              ]
            ],
            plugins : [
              [
                require.resolve ( 'fast-async' ),
                {
                  useRuntimeModule : true
                }
              ],
              require.resolve ( 'babel-plugin-transform-object-rest-spread' ),
              require.resolve ( 'babel-plugin-transform-export-extensions' ),
            ]
          },
        }
      }
    ],
  },
  plugins       : [
    new webpack.LoaderOptionsPlugin ( {
      minimize : true,
      debug    : false
    } ),
    new webpack.DefinePlugin ( {
      'process.env' : {
        'NODE_ENV' : JSON.stringify ( 'production' )
      }
    } ),
    new webpack.optimize.UglifyJsPlugin ( {
      beautify : false,
      mangle   : {
        screw_ie8   : true,
        keep_fnames : true
      },
      compress : {
        screw_ie8 : true
      },
      comments : false
    } )
  ],
  node          : {
    fs  : 'empty',
    net : 'empty',
    tls : 'empty',
  },
};
