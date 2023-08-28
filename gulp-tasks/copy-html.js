const gulp = require('gulp');
const replace = require('gulp-replace');
const browserSync = require('browser-sync').create();

function copyHtml() {
  return gulp
    .src('src/html/**/*.html')
    .pipe(replace('src/js/', './assets/js/'))
    .pipe(replace('src/media/', './assets/media/'))
    .pipe(replace('src/scss/', './assets/css/'))
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
}

exports.copyHtml = copyHtml;
