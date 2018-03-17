var gulp = require('gulp');
var textlint = require('gulp-textlint');

gulp.task('textlint', function(){
    return gulp.src(['./**/*.md', '!node_modules/**/*'])
        .pipe(textlint());
});

gulp.task('watch', ['textlint'], function(){
    gulp.watch('./**/*.md', ['textlint']);
});
