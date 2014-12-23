var gulp = require('gulp');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var scsslint = require('gulp-scsslint');
var compass = require('gulp-compass');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// we define some constants here so they can be reused
var paths = {
  css: 'css',
  sass: ['sass/**/*.scss', 'sass/*.scss'],
  images: 'client/img/**/*'
};

// // compile sass files
gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest(paths.css))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(paths.css));
});

// gulp.task('default', function() {
//   // compile scss
//   gulp.src(paths.sass)
//     .pipe(watch(paths.sass, ['sass']));
// });
