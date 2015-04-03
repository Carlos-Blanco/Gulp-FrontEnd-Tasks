var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var watch = require('gulp-watch');

/* Minify images */
gulp.task('images-opt', function () {
    gulp.src('./images/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
});

/* Compile and Minify Sass Task */
gulp.task('sass', function () {
    gulp.src('./css/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css'))
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('./build/css'));
});

/* Concatenate & Minify JS */
gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./js/*.js', ['scripts']);
    gulp.watch('./css/scss/*.scss', ['sass']);
});

/* Run default tasks */
gulp.task('default', ['images-opt','sass','scripts','watch']);





