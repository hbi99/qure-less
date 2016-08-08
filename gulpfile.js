
'use strict';

var gulp   = require('gulp'),
	$      = require('gulp-load-plugins')(),
	gutil  = require('gulp-util'),
	colors = require('colors');



// help instructions
gulp.task('help', function() {
	console.log('  gulp tests'.cyan          +'\t\tRun all tests'.grey);
	console.log('  gulp test --file 01'.cyan +'\tRun specific file'.grey);
});


/* 
 * this task executes all tests -
 * unless it is called with argument:
    gulp tests --file 01
 */
gulp.task('tests', function() {
	return gulp.src(TESTS, {read: false})
				.pipe($.mocha({reporter: 'list'}));
});


gulp.task('test', function() {
	var nr = process.argv.slice(2)[2],
		src = nr.match(/\d\d/) === null ? nr : 'test-'+ nr ;
	return gulp.src('tests/'+ src +'.js', {read: false})
				.pipe($.mocha({reporter: 'list'}));
});
