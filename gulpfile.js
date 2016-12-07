const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
//const sourcemaps = require('gulp-sourcemaps');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

// TypeScript compile
gulp.task('compile', ['clean'], function () {
  return gulp
    .src('app/**/*.ts')
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('copy:assets', ['clean'], function() {
  return gulp.src(['app/**/*', 'index.html',
  'styles.css',  'bootstrap.css',  'footer.css', 'font-awesome.css',
  'siddhanath-logo-web.png',
  'images/**/*.*',
  'systemjs.config.js',
  'node_modules/**/*.js',
  '!app/**/*.ts'], { base : './' })
    .pipe(gulp.dest('dist'))
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["app/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

gulp.task('watch', function () {
    gulp.watch(["app/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["app/**/*.html", "app/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});

gulp.task('build', ['compile', 'copy:assets']);
gulp.task('buildAll', ['clean', 'compile', 'copy:assets']);
gulp.task('default', ['build']);
