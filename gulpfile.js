// @noflow
/* eslint-disable arrow-body-style, comma-dangle, import/no-extraneous-dependencies */
/* eslint comma-dangle: ["error", { "functions": "never" }] */

const gulpHelp = require('gulp-help');
const gulp = gulpHelp(require('gulp'));


const { spawn } = require('child_process');
const { throttle } = require('lodash');
const clear = require('clear');
const path = require('path');
const Stream = require('stream');

const PROJECT_ROOT = path.resolve(__dirname);

const DEFAULT_WATCHMAN_CONFIG = {
  expression: [
    'allof',
    ['match', '/src/**/*.js', 'wholename', { includedotfiles: true }],
    ['type', 'f'],
    // ['not', ['match', '.git', 'basename']],
    // ['not', ['match', '.git/**/*', 'wholename', { includedotfiles: true }]],
    // ['not', ['match', 'flow-coverage', 'basename']],
    // [
    //   'not',
    //   ['match', 'flow-coverage/**/*', 'wholename', { includedotfiles: true }],
    // ],
    // ['not', ['match', 'coverage', 'wholename']],
    // ['not', ['match', 'coverage/**/*', 'wholename', { includedotfiles: true }]],
    // ['not', ['match', 'node_modules', 'basename']],
    // [
    //   'not',
    //   ['match', 'node_modules/**/*', 'wholename', { includedotfiles: true }],
    // ],
    [
      'not',
      ['match', '*/node_modules/**/*', 'wholename', { includedotfiles: true }],
    ],
    ['not', ['match', '**/*.unexpected-snap', 'wholename']],
  ],
};

function spawnAndPipe(command, args, options, cb) {
  const child = spawn(command, args, options);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  if (cb) {
    child.on('close', () => {
      cb();
    });
  }

  return child;
}

const onFileChange = changeCallback => {
  const stream = new Stream.Transform({ objectMode: true });

  // eslint-disable-next-line no-underscore-dangle
  stream._transform = (file, _, callback) => {
    const { cwd, relative, stat } = file;

    changeCallback(path.join(cwd, relative), stat, callback);
  };
  return stream;
};

gulp.task('clear', () => {
  clear();
});

// - flow - //

gulp.task('flow:watch', ['clear', 'flow'], () => {
  const watchman = require('gulp-watchman');
  return watchman(PROJECT_ROOT, DEFAULT_WATCHMAN_CONFIG, ['clear', 'flow']);
});

gulp.task('flow', cb => {
  console.log('PROJECT_ROOT', PROJECT_ROOT)
  spawnAndPipe(
    `${PROJECT_ROOT}/node_modules/.bin/flow`,
    ['--color', 'always', '--quiet'],
    undefined,
    cb
  );
});

// ~ flow ~ //
