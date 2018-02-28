var gulp = require('gulp');
var gutil = require( 'gulp-util' );
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var copy = require('gulp-copy');
var connect = require('gulp-connect');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

// Setup 
var build = function (dest) {
  gulp.task('clean-' + dest, function () {
    del.sync('dist/**/*');
  })

  gulp.task('sass-' + dest, function () {
      gulp.src(['src/scss/main.scss']) // style files (sass/scss to css compiler)
          .pipe(sass())
          .pipe(cleanCSS({compatibility: 'ie8'})) // minify css
          .pipe(gulp.dest(dest + '/css'))
  });

  gulp.task('html-' + dest, function () {
    gulp.src(['src/html/**/*.html']) // html files
        .pipe(htmlmin({collapseWhitespace: true})) // minify html
        .pipe(gulp.dest(dest))
  })

  gulp.task('img-' + dest, function () {
    gulp.src(['src/img/**/*'])
        .pipe(gulp.dest(dest + '/img')) // images
  })

  gulp.task('config-' + dest, function () {
    gulp.src(['src/browserconfig.xml'])
        .pipe(gulp.dest(dest)) // browserconfig
    gulp.src(['src/manifest.json'])
        .pipe(gulp.dest(dest)) // manifest
    gulp.src(['src/favicon.ico'])
        .pipe(gulp.dest(dest)) // favicon
  })

  gulp.task('js-' + dest, function () {
    gulp.src(['src/js/bundle.js']) // The Webpack Bundle
        .pipe(gulp.dest(dest + '/js'))
  })
}

build('dev');
build('dist');

// Developement options 
gulp.task('watch', [], function() {
  watch('dist').pipe(connect.reload());
  watch('src/html', function () {
    gulp.start(['html-dev']);
  })
  watch('src/img', function () {
    gulp.start(['img-dev']);
  })
  watch('src/js', function () {
    gulp.start(['js-dev']);
  })
  watch('src/scss', function () {
    gulp.start(['sass-dev']);
  });
})

// Live reload and developement options 
gulp.task('connect', function () {
    connect.server({
        root: ['dev', 'node_modules'],
        port: 8001,
        livereload: true
    });
});

gulp.task('dist', ['clean-dist', 'html-dist', 'img-dist', 'sass-dist', 'js-dist', 'config-dist']);

gulp.task('default', ['clean-dev', 'html-dev', 'img-dev', 'sass-dev', 'js-dev', 'config-dev', 'connect', 'watch']);