var gulp = require('gulp');
var sass = require('gulp-sass');
var cssMinify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var image = require('gulp-image');

/* Compile Sass Task */
gulp.task('sass', function() {
  gulp.src('./css/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/css'));
});

/* CSS Minify */
gulp.task('cssMinify', function() {
  gulp.src('./*.css')
    .pipe(cssMinify())
    .pipe(gulp.dest('./build/css'));
});

/* JS Uglify */
gulp.task('uglify', function() {
  gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
});

/* Image Optimize */
// gulp.task('image', function () {
//   gulp.src('./images/*')
//     .pipe(image())
//     .pipe(gulp.dest('.build/img'));
// });

/* Run default tasks */
gulp.task('default', ['sass','cssMinify','uglify']);





