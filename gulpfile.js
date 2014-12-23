var gulp = require('gulp');
var changed = require('gulp-changed');
var gutil = require('gulp-util');

var scsslint = require('gulp-scsslint');
var compass = require('gulp-compass');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// we define some constants here so they can be reused
var CSS_DIR = 'css';
var SASS_DIR = 'sass/*.scss';

// // compile sass files
gulp.task('sass', function () {
    gulp.src(SASS_DIR)
        .pipe(sass())
        .pipe(gulp.dest(CSS_DIR));
});

// gulp.task('default', function() {
//   return gulp.src(SRC)
//       // the `changed` task needs to know the destination directory
//       // upfront to be able to figure out which files changed
//       .pipe(changed(DEST))
//       // only files that has changed will pass through here
// });
