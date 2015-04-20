var gulp = require('gulp');
var bust = require('gulp-css-asset-cachebuster');

gulp.task('default', function() {
    return gulp.src('lib/styles/screen.css')
        .pipe(bust({
            // Will append ?v=1.2.3 as a query param for every url()
            buster: '1.2.3'
        }))
        .pipe(gulp.dest('built/'))
});
