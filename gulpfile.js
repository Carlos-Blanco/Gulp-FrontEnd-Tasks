var gulp = require('gulp');
var sass = require('gulp-sass');
var cssMinify = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
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

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

/* Image Optimize */
// gulp.task('image', function () {
//   gulp.src('./images/*')
//     .pipe(image())
//     .pipe(gulp.dest('.build/img'));
// });

/* Run default tasks */
gulp.task('default', ['sass','cssMinify','scripts']);





