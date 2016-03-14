// All used modules.
var gulp = require('gulp');
var babel = require('gulp-babel');
var runSeq = require('run-sequence');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var istanbul = require('gulp-istanbul');
var notify = require('gulp-notify');

// Development tasks
// --------------------------------------------------------------

// Live reload business.
gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('reloadCSS', function () {
    return gulp.src('./public/style.css').pipe(livereload());
});

gulp.task('lintJS', function () {

    return gulp.src(['./browser/*.js','./browser/app/**/*.js', './browser/utils/*.js', './browser/components/**/*.js', './server/**/*.js'])
        .pipe(plumber({
            errorHandler: notify.onError('Linting FAILED! Check your gulp process.')
        }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failOnError());

});

gulp.task('buildJS', ['lintJS'], function () {
    return gulp.src(['./browser/*.js', './browser/utils/*.js', './browser/components/**/*.js', './browser/app/**/*.js'])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public'));
});

gulp.task('buildCSS', function () {

    var sassCompilation = sass();
    sassCompilation.on('error', console.error.bind(console));

    return gulp.src('./browser/app/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError('SASS processing failed! Check your gulp process.')
        }))
        .pipe(sassCompilation)
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./public'));
});

// Production tasks
// --------------------------------------------------------------

gulp.task('buildCSSProduction', function () {
    return gulp.src('./browser/app/scss/main.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public'))
});

gulp.task('buildJSProduction', function () {
    return gulp.src(['./browser/*.js', './browser/utils/*.js','./browser/components/**/*.js', './bowser/app/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(babel())
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('buildProduction', ['buildCSSProduction', 'buildJSProduction']);

// Composed tasks
// --------------------------------------------------------------

gulp.task('build', function () {
    if (process.env.NODE_ENV === 'production') {
        runSeq(['buildJSProduction', 'buildCSSProduction']);
    } else {
        runSeq(['buildJS', 'buildCSS']);
    }
});

gulp.task('default', function () {

  gulp.start('build');

// Run when anything inside of browser/app changes.
gulp.watch('browser/app/js/**', function () {
  runSeq('buildJS', 'reload');
});

// Run when anything inside of browser/app changes.
gulp.watch('browser//*.js', function () {
  runSeq('buildJS', 'reload');
});
// Run when anything inside of browser/components changes.
gulp.watch('browser/components/**', function () {
  runSeq('buildJS', 'reload');
});
// Run when anything inside of browser/utils changes.
gulp.watch('browser/utils/**', function () {
  runSeq('buildJS', 'reload');
});

// Run when anything inside of browser/scss changes.
gulp.watch('browser/app/js/scss/**', function () {
  runSeq('buildCSS', 'reloadCSS');
});

gulp.watch('server/**/*.js', ['lintJS']);

// Reload when a template (.html) file changes.
gulp.watch(['browser/**/*.html', 'server/app/views/*.html'], ['reload']);


    livereload.listen();
});
