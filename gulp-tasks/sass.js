const gulp = require('gulp');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function compileSass() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(replace('src/', '../'))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(browserSync.stream());
}

exports.compileSass = compileSass;
