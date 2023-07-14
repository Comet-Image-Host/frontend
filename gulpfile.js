var gulp = require('gulp');
var babel = require('gulp-babel');
var terser = require('gulp-terser');
var htmlmin = require('gulp-htmlmin');
var fs = require('fs');
var glob = require('glob');

var isProduction = true; // Set to true for production deployment

function minifyJsTask(srcPath, destPath) {
    return function() {
        return gulp.src(srcPath)
            .pipe(babel())
            .pipe(terser())
            .pipe(gulp.dest(destPath));
    }
}

function modifyFilesTask(filePattern, findPattern, replaceWith) {
    return function() {
        if (isProduction) {
            glob(filePattern, function(err, files) {
                if (err) throw err;

                files.forEach(function(file) {
                    var fileContent = fs.readFileSync(file, 'utf8');
                    var modifiedContent = fileContent.replace(findPattern, replaceWith);
                    fs.writeFileSync(file, modifiedContent, 'utf8');
                });
            });
        }

        return Promise.resolve();
    }
}

gulp.task('minify-js-components', minifyJsTask('components/*.js', 'dist/components'));

gulp.task('minify-js-scripts', minifyJsTask('scripts/*.js', 'dist/scripts'));

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

gulp.task('modify-html-files', modifyFilesTask('dist/*.html', /\.\.\//g, './'));

gulp.task('modify-all-files', modifyFilesTask('dist/**/*.*', /\.\.\/pages\//g, ''));

gulp.task('default', gulp.series('minify-js-components', 'minify-js-scripts', 'minify-html', 'copy-robots', 'modify-html-files', 'modify-all-files'));
