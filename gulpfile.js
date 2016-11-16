var gulp = require('gulp'),
    sass = require('gulp-sass'),
    htmlReplace = require('gulp-html-replace');

var paths = {
    sassSrcPath: ['./public/sass/**/*.scss'],
    sassDestPath: './public/css/'
};

gulp.task('sass', ['css'], function () {
  return gulp.src('./public/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('css', function(){
   return gulp.src('./public/**/*.html')
    .pipe(htmlReplace({
       'css':'css/style.css'
   }));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./public/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);