var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    input = {'sass': '../../web/themes/petplan_subtheme/scss/*.scss'},
    output = {'stylesheets': '../../web/themes/petplan_subtheme/css'};

/* run the watch task when gulp is called without arguments */
gulp.task('default', ['build-css']);
var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed'
};
/* compile scss files */
gulp.task('build-css', function () {
    return gulp.src(input.sass)
        .pipe(sass(sassOptions))
        .pipe(autoprefixer())
        .pipe(gulp.dest(output.stylesheets))
        // See: http://sassdoc.com/gulp/#drain-event
        .resume();
});
