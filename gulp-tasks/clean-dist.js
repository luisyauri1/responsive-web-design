const gulp = require('gulp');
const clean = require('gulp-clean');

function cleanDist() {
  return gulp.src('dist', { read: false, allowEmpty: true }).pipe(clean());
}

exports.cleanDist = cleanDist;
