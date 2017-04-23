var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('default', function() {
  gulp.src('img/originals/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'))
});