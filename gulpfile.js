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

// Define una tarea 'start' que ejecuta las tareas necesarias para el desarrollo
gulp.task('start', gulp.series('clean-dist', 'sass', 'uglify', 'copy-html', 'process-images', 'watch'));

// Define una tarea 'build' que ejecuta las tareas necesarias para la construcción de producción
gulp.task('build', gulp.series('clean-dist', 'sass', 'uglify', 'copy-html', 'process-images'));

// Tarea por defecto (para ejecutar con 'npm run start')
gulp.task('default', gulp.series('start'));
