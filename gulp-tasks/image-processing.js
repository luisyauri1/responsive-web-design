const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

function processImages() {
  return gulp.src('src/media/**/*').pipe(imagemin()).pipe(gulp.dest('dist/assets/media')).pipe(browserSync.stream());
}

exports.processImages = processImages;
