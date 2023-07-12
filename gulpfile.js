var gulp = require('gulp');
var babel = require('gulp-babel');
var terser = require('gulp-terser');
var htmlmin = require('gulp-htmlmin');

var isProduction = true; // Set to true for production deployment

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

gulp.task('modify-html-files', function() {
    var htmlFiles = 'dist/*.html';

    if (isProduction) {
        // Modify the script paths in all HTML files for production deployment
        var fs = require('fs');
        var glob = require('glob');

        glob(htmlFiles, function(err, files) {
            if (err) throw err;

            files.forEach(function(file) {
                var htmlContent = fs.readFileSync(file, 'utf8');
                var modifiedContent = htmlContent.replace(
                    /<script src="\.\.\/components\/(.*?)"><\/script>/g,
                    '<script src="./components/$1"></script>'
                );
                fs.writeFileSync(file, modifiedContent, 'utf8');
            });
        });
    }

    return Promise.resolve();
});

gulp.task('default', gulp.series('minify-js', 'minify-html', 'copy-robots', 'modify-html-files'));
