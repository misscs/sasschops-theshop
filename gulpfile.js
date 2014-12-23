var gulp = require('gulp');
var gutil = require('gulp-util');
var changed = require('gulp-changed');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var cache = require('gulp-cached');
var connect = require('gulp-connect');

var scsslint = require('gulp-scsslint');
var compass = require('gulp-compass');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

// we define some constants here so they can be reused
var paths = {
  css: 'css',
  sass: ['sass/**/*.scss', 'sass/*.scss'],
  images: 'client/img/**/*',
  scss_lint: 'scss_lint.yml'
};

// task to compile sass files
gulp.task('sass', ['lint'], function () {
  gulp.src(paths.sass)
    .pipe(sass())
    .pipe(gulp.dest(paths.css))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(paths.css))
    .pipe(livereload());
});

// task to lint sass files
gulp.task('lint', function () {
  return gulp.src(paths.sass)
    .pipe(scsslint({ 'config': paths.scss_lint, 'bundleExec': true }))
    .pipe(scsslint.reporter())
});

// task to start the webserver
// looks for index.html in root directory (where gulpfile.js)
gulp.task('webserver', function() {
  connect.server();
});

// task to watch files for changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.sass, ['sass']);
});

// default task
gulp.task('default', ['sass', 'watch', 'webserver']);

