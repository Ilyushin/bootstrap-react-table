/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import { argv } from 'yargs';
import util from 'gulp-util';
import eslint from 'gulp-eslint';
import babel from 'gulp-babel';
import { spawn } from 'child_process';
import clean from 'gulp-clean';
import istanbul from 'gulp-babel-istanbul';

/**
 * Task for compiling the application.
 */
gulp.task('compile', ['lint'], () => gulp.src(['src/**/*.js'])
  .pipe(babel())
  .pipe(gulp.dest('build')));

gulp.task('clean', () => gulp.src('build/*', { read: false })
  .pipe(clean()));

/**
 * Task for linting .js files.
 * @example
 * gulp lint
 * // lints all .js files including this (gulpfile.babel.js) file itself
 * @example
 * gulp lint -p app/main.js
 * gulp lint --path app/main.js
 * // lints 'main.js' file in 'app' folder
 */
gulp.task('lint', () => {
  const path = argv.path || argv.p || ['*.babel.js', 'src/**/*.js', 'test/**/*.js'];
  return gulp.src(path)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

/**
 * Task for running tests
 * @example
 * gulp test
 * // runs all tests in 'test' folder
 * @example
 * gulp test -p models.js
 * gulp test --path models.js
 * // runs test from 'models.js' file in 'test' folder
 */
gulp.task('test', ['lint'], () => {
  const path = `test/${argv.path || argv.p || '**/*.js'}`;
  process.env.NODE_ENV = 'test';
  return gulp.src(['src/**/*.js'])
    .pipe(istanbul({ includeUntested: true }))
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src([path, '!fixtures/*'])
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 10 } }))
        .once('error', (err) => {
          util.log(util.colors.red(`Error: ${err.message}`));
          process.exit(1);
        })
        .once('end', () => {
          process.exit();
        });
    });
});

gulp.task('run', cb => spawn('node_modules/.bin/node-dev', ['server'], { stdio: 'inherit' })
  .on('close', () => cb()));
