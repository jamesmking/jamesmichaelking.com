"use strict";

const gulp = require('gulp');
const sass = require('gulp-sass')

const paths = {
  "src": {
    "scss": "./src/**/*.scss",
  },
  "dist": {
    "css": "./dist/css/",
    "js": "./dist/js/"
  }
}

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed',
  includePaths: [],
};

gulp.task('watch-scss', () => gulp
  .watch(paths.src.scss, gulp.series('compile-scss'))
  .on('change',  path => console.log(`File ${path} was changed, running tasks...`))
);

gulp.task('compile-scss', () => gulp
  .src(paths.src.scss)
  .pipe(sass(sassOptions))
  .pipe(gulp.dest(paths.dist.css)));