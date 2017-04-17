#!/usr/bin/env node

'use strict';

var spawn = require ( 'cross-spawn' );

var result = spawn.sync (
  'node',
  [ require.resolve ( './loader' ) ],
  { stdio : 'inherit' }
);
if ( result.signal ) {
  process.exit ( 1 );
}
process.exit ( result.status );
