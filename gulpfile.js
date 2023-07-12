var gulp = require('gulp');
var babel = require('gulp-babel');
var terser = require('gulp-terser');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-js', function() {
    return gulp.src('components/*.js')
        .pipe(babel())
        .pipe(terser())
        .pipe(gulp.dest('dist/components'));
});

gulp.task('minify-html', function() {
    return gulp.src('pages/*.html')
        .pipe(htmlmin({ 
            collapseWhitespace: true, 
            removeComments: true,
            minifyCSS: true, 
            minifyJS: true 
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy-robots', function() {
    return gulp.src('robots.txt')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('minify-js', 'minify-html', 'copy-robots'));
