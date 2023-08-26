const gulp = require('gulp');
const cleanDistTask = require('./gulp-tasks/clean-dist');
const sassTask = require('./gulp-tasks/sass');
const uglifyTask = require('./gulp-tasks/uglify');
const copyHtmlTask = require('./gulp-tasks/copy-html');
const watchTask = require('./gulp-tasks/watch');
const imageProcessingTask = require('./gulp-tasks/image-processing');

// Definir tareas individuales
gulp.task('clean-dist', cleanDistTask.cleanDist);
gulp.task('sass', sassTask.compileSass);
gulp.task('uglify', uglifyTask.minifyJS);
gulp.task('copy-html', copyHtmlTask.copyHtml);
gulp.task('process-images', imageProcessingTask.processImages);

// Tarea de observación (watch)
gulp.task('watch', watchTask.startWatch);

// Tarea predeterminada que se ejecuta al escribir 'gulp' en la terminal
// gulp.task('default', gulp.series('clean-dist', 'sass', 'uglify', 'copy-html', 'process-images', 'watch'));
gulp.task('default', gulp.series('clean-dist', 'sass', 'uglify', 'copy-html', 'process-images'));
