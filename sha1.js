#!/usr/bin/env node
var crypto, f, filename, fs, sha1;

fs = require('fs');

crypto = require('crypto');

filename = process.argv[2];

sha1 = crypto.createHash('sha1');

f = fs.createReadStream(filename);

f.pipe(sha1);

f.on('end', function() {
  return console.log('SHA1 (' + filename + ') = ' + sha1.read().toString('hex'));
});
