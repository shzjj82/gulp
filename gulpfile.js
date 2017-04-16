var gulp = require('gulp');

gulp.task('autoprefixer', function () {
  var postcss      = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');

  return gulp.src('./postcss/*.css')
    .pipe(postcss([ autoprefixer({ browsers: ['last 40 versions'] }) ]))
    .pipe(gulp.dest('./dist/postcss'));

    gulp.watch(["./postcss/*.css"]).on('change', gulp.run('autoprefixer'));
});
var browserSync = require('browser-sync').create();


gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    
});

gulp.task('default',function(){
	gulp.run('serve','autoprefixer');
	  gulp.watch('./postcss/*.css', function(){
        gulp.run( 'autoprefixer');
    });
});