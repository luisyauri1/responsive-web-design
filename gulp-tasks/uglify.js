const gulp = require('gulp');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function minifyJS() {
  return gulp.src('src/js/**/*.js').pipe(uglify()).pipe(gulp.dest('dist/assets/js')).pipe(browserSync.stream());
}

exports.minifyJS = minifyJS;
