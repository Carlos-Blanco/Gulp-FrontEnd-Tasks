
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssMinify = require('gulp-minify-css');
var concat = require('gulp-concat');
var image = require('gulp-image');

/* Compile Sass Task */
gulp.task('sass', function() {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

/* CSS Minify */
gulp.task('cssMinify', function() {
  gulp.src('./*.css')
    .pipe(cssMinify())
    .pipe(gulp.dest('.build/css'));
});

/* JS Concat */
gulp.task('concat', function() {
  gulp.src('./scripts/libs/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('.build/js/'))
});

/* Image Optimize */
gulp.task('image', function () {
  gulp.src('./images/*')
    .pipe(image())
    .pipe(gulp.dest('.build/img'));
});

/* Run default tasks */
gulp.task('default', ['sass','cssMinify','concat','image']);





