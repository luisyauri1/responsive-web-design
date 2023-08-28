const gulp = require('gulp');
const replace = require('gulp-replace');
const browserSync = require('browser-sync').create();

function startWatch() {
  browserSync.init({
    server: './dist',
  });
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('uglify'));
  gulp.watch('src/**/*.html', gulp.series('copy-html'));
  gulp.watch('src/media/**/*', gulp.series('process-images'));
  gulp.watch('src/scss/**/*.scss').on('change', browserSync.reload);
  gulp.watch('src/js/**/*.js').on('change', browserSync.reload);
  gulp.watch('src/**/*.html').on('change', browserSync.reload);
}

exports.startWatch = startWatch;
