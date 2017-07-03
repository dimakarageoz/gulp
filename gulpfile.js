var gulp = require('gulp');
var clear = require('del');
var debug = require('gulp-debug');
// var gulpConcat = require('gulp-concat');
var sassConvert = require('gulp-sass');
var browser = require('browser-sync').create();
var remember = require('gulp-remember');
var babel = require('gulp-babel');
var cached = require('gulp-cached');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var path = require('path');
var del = require('del');

gulp.task('listen_sass_css', function(){
  return gulp.src('styleSass/**/index.scss')
    .pipe(plumber({ errorHandler: notify.onError(function (err) {
      return {
        titel: 'Style',
        message: err.message
      }
    })}))
    .pipe(remember('styles'))
    .pipe(sassConvert())
    .pipe(debug({ titel: 'sass_css'}))
    .pipe(gulp.dest('public/style'))
})

gulp.task('js_with_babel', function(){
  return gulp.src('js/**/*.*', {since: gulp.lastRun('js_with_babel')})
  .pipe(plumber({errorHandler: notify.onError(function (err) {
    return {
      titel: 'JavaScript',
      message: err.message 
    }
  })}))
  .pipe(remember('script'))
  .pipe(babel({
    presets: ['es2015', 'react']
  }))
  .pipe(gulp.dest('public/js'))
})

gulp.task('clear', function(){
  return del(['public/style', 'public/js'])
});


gulp.task('watch_sass', function(){
  gulp.watch('styleSass/**/*.scss', gulp.series('listen_sass_css')).on(
    'unlink', function(filename) {
      remember.forget('styles', path.resolve(filename));
      delete cached.caches.styles[path.resolve(filename)];
    })
})
gulp.task('watch_js', function(){
  gulp.watch('js/**/*.*', gulp.series('js_with_babel')).on(
    'unlink', function(filename) {
      remember.forget('script', path.resolve(filename));
      delete cached.caches.styles[path.resolve(filename)];
    })
})

gulp.task('server', function(){
browser.init({
    server: 'public',
    port: 4000
});
browser.watch('public/**/*.*').on('change', browser.reload);
});

gulp.task('build',
  gulp.series(
      gulp.series('listen_sass_css', 'js_with_babel'),
      gulp.parallel('watch_sass', 'watch_js', 'server')
   )
);
