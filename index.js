
'use strict';

var accord = require('accord'),
	chokidar = require('chokidar'),
	through2 = require('through2'),
	less = require('less');

// fs.createReadStream('README.md')
// 	.pipe(through2(function (chunk, enc, callback) {
// 		console.log(chunk, enc, callback);
// 	}));

var watcher = chokidar.watch('README.md', {
	ignored: /[\/\\]\./,
	persistent: true
});

watcher
	.on('add', function(path) {
		console.log(`File ${path} has been added`)
	})
	.on('change', function(path) {
		console.log(`File ${path} has been changed`)
	})
	.on('unlink', function(path) {
		console.log(`File ${path} has been removed`);
	});


module.exports = {
	init: function() {
		
	}
};
